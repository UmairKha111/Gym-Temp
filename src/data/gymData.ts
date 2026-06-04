import type { GymData } from "../types/gym";

const gymData: GymData = {
  gymName: "Awadh Fitness Gym",
  tagline: "Transform Your Body Transform Your Life",
  phone: "7309544367",
  city: "Lucknow",

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
    },
    {
      name: "Quarterly",
      price: "2499",
    },
    {
      name: "Yearly",
      price: "7999",
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
