import { Facebook, Twitter, Youtube, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-green-400">Digi</span>Pathshala
            </h3>
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for Digital India
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} DigiPathshala | Empowering Digital India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
