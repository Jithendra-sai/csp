import { AlertCircle } from 'lucide-react';

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold">The Challenge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bridging the Digital Divide
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Millions in rural India lack access to digital education. Without basic computer and smartphone skills, they miss out on online learning, banking, and opportunities. DigiPathshala brings free Telugu digital training directly to your home through simple YouTube lessons.
            </p>
          </div>

          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-orange-400 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Rural learners"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
