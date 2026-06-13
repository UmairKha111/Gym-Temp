import type { GymData } from "../types/gym";

const gymData: GymData = {
  gymName: "Crafted Fitness Gym",
  tagline: "🏋️join us on the journey to a stronger ,happier you ",
  phone: "9601758319",
  city: "Karelibaug  ",

  address: "Address: 2nd Floor Chankya Complex, Near Avkar hall, Water Tank Road, Karelibaug -390018",

  stats: [
    {
      value: "500+",
      label: "Members",
    },
    {
      value: "10+",
      label: "Certified Trainers",
    },
    {
      value: "5+",
      label: "Years Experience",
    },
  ],

  plans: [
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
  ],

  trainers: [
    {
      name: "Rahul Singh",
      role: "Strength Coach",
    },
    {
      name: "Amit Verma",
      role: "Personal Trainer",
    },
    {
      name: "Vikram Yadav",
      role: "Nutrition Expert",
    },
  ],
};

export default gymData;