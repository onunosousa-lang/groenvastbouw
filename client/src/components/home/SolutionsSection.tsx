export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-[#dcdcdc]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a3439] mb-4">
            Onze Technische Oplossingen
          </h2>
          <p className="text-lg text-[#2a3439] font-medium">
            Twee bouwmethoden. Vier presets. Eén doel: maximale efficiëntie en kwaliteit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 space-y-4">
          <div className="bg-[#dcdcdc] rounded-lg shadow-md border border-[#dcdcdc] p-6">
            <h3 className="text-xl font-bold text-[#2a3439] mb-2">Basis Structuur</h3>

            <p className="text-[#2a3439]">
              Een fundamentele oplossing voor het bouwframe.
            </p>
          </div>

          <div className="bg-[#dcdcdc] rounded-lg shadow-md border border-[#dcdcdc] p-6">
            <h3 className="text-xl font-bold text-[#2a3439] mb-2">Optimale Structuur</h3>

            <p className="text-[#2a3439]">
              Ontworpen voor gematigde klimaten met 200mm isolatie.
            </p>
          </div>

          <div className="bg-[#dcdcdc] rounded-lg shadow-md border border-[#dcdcdc] p-6">
            <h3 className="text-xl font-bold text-[#2a3439] mb-2">Passieve Structuur</h3>

            <p className="text-[#2a3439]">
              Met aanvullende externe isolatie voor maximale efficiëntie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
