import gymData from "../data/gymData";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl font-bold">
          {gymData.gymName}
        </h3>

        <p className="text-gray-500 mt-3">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;