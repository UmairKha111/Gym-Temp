import gymData from "../data/gymData";

const Trainers = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase mb-3">
            Expert Team
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Meet Our Trainers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gymData.trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-zinc-900 rounded-2xl overflow-hidden"
            >
              <div className="h-80 bg-zinc-800"></div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
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