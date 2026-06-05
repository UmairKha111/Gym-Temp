import gymData from "../data/gymData";

const Trainers = () => {
  return (
    <section
      id="trainers"
      className="py-24 px-6 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-wider mb-3">
            Expert Team
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Meet Our Trainers
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Train with experienced fitness professionals dedicated to helping you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {gymData.trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Trainer Image Placeholder */}
              <div className="h-80 bg-zinc-800 flex items-center justify-center">
                <span className="text-gray-500">
                  Trainer Photo
                </span>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {trainer.name}
                </h3>

                <p className="text-red-500">
                  {trainer.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Trainers;