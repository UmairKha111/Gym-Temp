import gymData from "../data/gymData";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-red-500 uppercase mb-3">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready To Start Your Fitness Journey?
        </h2>

        <p className="text-gray-400 mb-10">
          Contact us today and get started.
        </p>

        <a
          href={`https://wa.me/${gymData.phone}`}
          target="_blank"
          rel="noreferrer"
          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold"
        >
          Chat On WhatsApp
        </a>

      </div>
    </section>
  );
};

export default Contact;