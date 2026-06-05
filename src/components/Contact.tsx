import gymData from "../data/gymData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-zinc-950"
    >
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-red-500 uppercase tracking-wider mb-3">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready To Start Your Fitness Journey?
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Join {gymData.gymName} and take the first step toward a healthier,
          stronger, and more confident version of yourself.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href={`https://wa.me/${gymData.phone}`}
            target="_blank"
            rel="noreferrer"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition duration-300"
          >
            Chat On WhatsApp
          </a>

          <a
            href={`tel:${gymData.phone}`}
            className="border border-red-600 hover:bg-red-600 px-8 py-4 rounded-xl font-bold transition duration-300"
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;