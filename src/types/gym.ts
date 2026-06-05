export interface GymData {
  gymName: string;
  tagline: string;
  phone: string;
  city: string;
  address: string;

  stats: {
    value: string;
    label: string;
  }[];

  plans: {
    name: string;
    price: string;
    features: string[];
  }[];

  trainers: {
    name: string;
    role: string;
  }[];
}