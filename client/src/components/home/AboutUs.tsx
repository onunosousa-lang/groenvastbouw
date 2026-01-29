export default function AboutUs() {
  return (
    <section className="bg-[#dcdcdc] py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#8eb564] mb-8 text-center">
          About Us
        </h2>
        
        <div className="space-y-6 text-lg text-[#2a3439] leading-relaxed">
          <p>
            We build{" "}
            <span className="text-[#8eb564] font-semibold">sustainable</span>,{" "}
            <span className="text-[#8eb564] font-semibold">high-performance</span>{" "}
            <span className="text-[#8eb564] font-semibold">timber frame</span> buildings designed to be truly{" "}
            <span className="text-[#8eb564] font-semibold">future-proof</span>.
          </p>
          
          <p>
            With over 15 years of experience in{" "}
            <span className="text-[#8eb564] font-semibold">timber construction</span> and{" "}
            <span className="text-[#8eb564] font-semibold">sustainable building</span>, Groenvastbouw combines local expertise in the Netherlands with direct access to advanced industrial manufacturing through our partnership with{" "}
            <a 
              href="https://senmar.pt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8eb564] font-semibold hover:underline"
            >
              Senmar
            </a>{" "}
            in{" "}
            <span className="text-[#8eb564] font-semibold">Portugal</span>.
          </p>
          
          <p>
            Our commitment is to real{" "}
            <span className="text-[#8eb564] font-semibold">sustainability</span> and real{" "}
            <span className="text-[#8eb564] font-semibold">performance</span>, never compromising on materials, build quality, or long-term efficiency. By producing{" "}
            <span className="text-[#8eb564] font-semibold">precision timber structures</span> in controlled factory conditions, we reduce waste, control costs, and deliver buildings that can save up to{" "}
            <span className="text-[#8eb564] font-semibold">90% of heating energy</span> while providing a{" "}
            <span className="text-[#8eb564] font-semibold">healthy</span> and{" "}
            <span className="text-[#8eb564] font-semibold">comfortable</span> indoor environment.
          </p>
          
          <p>
            We offer solutions from{" "}
            <span className="text-[#8eb564] font-semibold">structural shell</span> to fully{" "}
            <span className="text-[#8eb564] font-semibold">turnkey buildings</span> and can coordinate the entire process, from{" "}
            <span className="text-[#8eb564] font-semibold">foundations</span> to{" "}
            <span className="text-[#8eb564] font-semibold">energy systems</span>, working alongside trusted local partners when needed.
          </p>
          
          <p className="text-xl font-semibold text-[#8eb564] text-center mt-8">
            Build better. Build sustainably. Build for the future.
          </p>
        </div>
      </div>
    </section>
  );
}
