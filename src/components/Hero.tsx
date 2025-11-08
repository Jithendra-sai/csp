import { ArrowRight } from 'lucide-react';

function Hero() {
  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-orange-50 to-green-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Rural India through
            <span className="block text-green-700 mt-2">Digital Learning</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Learn basic computer and smartphone skills in Telugu — anytime, anywhere
          </p>

          <button
            onClick={scrollToCourses}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Learning Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
          <p className="text-gray-800 font-semibold text-xl">Telugu Video Lessons</p>
          <p className="text-gray-600 mt-2">Free YouTube lessons in your language</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
