import { motion } from "framer-motion";
import gymData from "../data/gymData";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     <section
  className="relative min-h-screen pt-28 md:pt-12 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
          <div>
            <p className="text-red-500 uppercase tracking-[4px] mb-4">
              Premium Fitness Center
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
              {gymData.tagline}
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Achieve your fitness goals with expert trainers,
              modern equipment, and personalized workout plans.
            </p>

            {/* Dynamic Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {gymData.stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-bold text-red-500">
                    {stat.value}
                  </h3>

                  <p className="text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href={`https://wa.me/${gymData.phone}`}
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold text-lg transition duration-300"
              >
                Start Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;