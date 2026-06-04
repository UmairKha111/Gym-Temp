const Testimonials = () => {
  const reviews = [
    {
      name: "Rohit Sharma",
      review:
        "Amazing trainers and great atmosphere. Lost 12kg in 5 months.",
    },
    {
      name: "Ankit Verma",
      review:
        "Best gym in the city. Equipment and guidance are excellent.",
    },
    {
      name: "Priya Singh",
      review:
        "Very supportive trainers and personalized workout plans.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What Members Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-zinc-900 p-8 rounded-2xl"
            >
              <p className="text-gray-400 mb-6">
                "{review.review}"
              </p>

              <h3 className="font-bold">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;