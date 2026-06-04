import gymData from "../data/gymData";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">
          {gymData.gymName}
        </h1>

        <a
          href={`https://wa.me/${gymData.phone}`}
          target="_blank"
          rel="noreferrer"
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold transition"
        >
          Join Now
        </a>
      </nav>
    </header>
  );
};

export default Navbar;