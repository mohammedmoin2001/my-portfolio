import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 bg-blue-50 border-t border-blue-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 space-y-4 sm:space-y-0">
        <p className="text-sm text-gray-600">&copy; 2025 Mohamad Moin</p>
        <div className="flex space-x-6 text-blue-600 text-xl">
          <a href="mailto:moinmohammed830@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-blue-800 transition" />
          </a>
          <a href="tel:7204871617" aria-label="Phone">
            <FaPhone className="hover:text-blue-800 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-moin-920802204"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-800 transition" />
          </a>
          <a
            href="https://github.com/mohammedmoin2001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-blue-800 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}