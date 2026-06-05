import gymData from "../data/gymData";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Gym Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {gymData.gymName}
            </h3>

            <p className="text-gray-400">
              {gymData.address}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact
            </h4>

            <a
              href={`tel:${gymData.phone}`}
              className="block text-gray-400 hover:text-red-500 transition"
            >
              📞 {gymData.phone}
            </a>

            <p className="text-gray-400 mt-2">
              📍 {gymData.city}
            </p>
          </div>

          {/* Developer Credit */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Website Developed By
            </h4>

            <a
              href="https://umanztechnology.in"
              target="_blank"
              rel="noreferrer"
              className="text-red-500 hover:text-red-400 font-semibold"
            >
              Umanz Technology
            </a>

            <p className="text-gray-500 mt-2">
              Professional Website Development
            </p>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} {gymData.gymName}. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;