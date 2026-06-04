const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            alt="Gym"
            className="rounded-2xl"
          />
        </div>

        <div>
          <p className="text-red-500 uppercase mb-3">
            About Us
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Best Gym In Lucknow
          </h2>

          <p className="text-gray-400 leading-8">
            We help members achieve their fitness goals
            through expert guidance, premium equipment,
            personalized workout plans, and nutrition support.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;