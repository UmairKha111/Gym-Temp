const Transformations = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-red-500 uppercase mb-3">
            Success Stories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Member Transformations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <div className="h-80 bg-zinc-800"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl">
                Weight Loss
              </h3>
              <p className="text-gray-400">
                Lost 15kg in 6 months.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <div className="h-80 bg-zinc-800"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl">
                Muscle Gain
              </h3>
              <p className="text-gray-400">
                Gained 8kg lean muscle.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <div className="h-80 bg-zinc-800"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl">
                Fat Reduction
              </h3>
              <p className="text-gray-400">
                Reduced body fat significantly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Transformations;