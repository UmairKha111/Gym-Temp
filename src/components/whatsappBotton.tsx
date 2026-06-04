// src/components/WhatsappButton.tsx

import gymData from "../data/gymData";

const WhatsappButton = () => {
  return (
    <a
      href={`https://wa.me/${gymData.phone}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-lg"
    >
      💬
    </a>
  );
};

export default WhatsappButton;