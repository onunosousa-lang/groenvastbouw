import { publicProcedure, router } from "../_core/trpc";
import * as z from "zod";
import { notifyOwner } from "../_core/notification";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export const contactRouter = router({
  sendEmail: publicProcedure
    .input(contactSchema)
    .mutation(async ({ input }) => {
      try {
        // Send notification to owner with contact form data
        const success = await notifyOwner({
          title: `New Contact Request from ${input.name}`,
          content: `
Email: ${input.email}
Phone: ${input.phone || 'Not provided'}

Message:
${input.message}
          `.trim(),
        });

        if (!success) {
          throw new Error("Failed to send notification");
        }

        return {
          success: true,
          message: "Email sent successfully",
        };
      } catch (error) {
        console.error("Failed to send email:", error);
        throw new Error("Failed to send email");
      }
    }),
});
