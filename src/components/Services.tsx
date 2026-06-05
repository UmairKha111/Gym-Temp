import {
  FaDumbbell,
  FaRunning,
  FaHeartbeat,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaDumbbell size={40} />,
      title: "Strength Training",
      desc: "Build muscle and increase strength with expert guidance.",
    },
    {
      icon: <FaRunning size={40} />,
      title: "Cardio Fitness",
      desc: "Improve endurance and burn calories effectively.",
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Personal Training",
      desc: "Customized fitness plans tailored to your goals.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-wider mb-3">
            Our Programs
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Fitness Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-red-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;