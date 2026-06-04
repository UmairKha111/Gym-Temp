import gymData from "../data/gymData";

const Plans = () => {
  const plans = [
    {
      name: "Monthly",
      price: "999",
      features: [
        "Unlimited Gym Access",
        "Locker Facility",
        "Basic Trainer Support",
      ],
    },
    {
      name: "Quarterly",
      price: "2499",
      features: [
        "Unlimited Gym Access",
        "Diet Guidance",
        "Priority Support",
      ],
    },
    {
      name: "Yearly",
      price: "7999",
      features: [
        "Unlimited Gym Access",
        "Personal Guidance",
        "Diet Plan",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-red-500 uppercase mb-3">
            Membership Plans
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
            >
              <h3 className="text-2xl font-bold mb-4">
                {plan.name}
              </h3>

              <div className="text-5xl font-bold text-red-500 mb-6">
                ₹{plan.price}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${gymData.phone}?text=Hi, I am interested in the ${plan.name} plan.`}
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold"
              >
                Enquire Now
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Plans;