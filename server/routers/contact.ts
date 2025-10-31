import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";

export const contactRouter = router({
  sendMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("Email inválido"),
        phone: z.string().optional(),
        message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
      })
    )
    .mutation(async ({ input }) => {
      // Send email using built-in email service
      const emailContent = `
Nova mensagem de contacto de ${input.name}

Email: ${input.email}
Telefone: ${input.phone || "Não fornecido"}

Mensagem:
${input.message}
      `;

      try {
        // Use the built-in email API
        const response = await fetch(process.env.BUILT_IN_FORGE_API_URL + "/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.BUILT_IN_FORGE_API_KEY}`,
          },
          body: JSON.stringify({
            to: "info@groenvastbouw.nl",
            subject: `Nova mensagem de contacto de ${input.name}`,
            text: emailContent,
            html: emailContent.replace(/\n/g, "<br>"),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send email");
        }

        return { success: true, message: "Mensagem enviada com sucesso!" };
      } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Erro ao enviar mensagem. Por favor, tente novamente.");
      }
    }),
});
