import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-8 text-center">
      {/* Иконки соцсетей в одной линии */}
      <div className="flex flex-row justify-center items-center gap-6 mb-4">
        <a href="#" className="text-blue-600">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-sky-500">
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/onay.school/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 transition-colors"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="https://www.linkedin.com/company/onay-school/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
        <p className="text-md">
          &copy; 2025 Все права защищены —{" "}
          <span className="font-semibold">
            <span className="text-[#0449ad]">Onay</span> School
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
