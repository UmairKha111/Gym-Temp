export interface GymData {
  gymName: string;
  tagline: string;
  phone: string;
  city: string;

  stats: {
    value: string;
    label: string;
  }[];

  plans: {
    name: string;
    price: string;
  }[];

  trainers: {
    name: string;
    role: string;
  }[];
}