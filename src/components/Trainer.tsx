import { Users, Heart, ArrowRight } from 'lucide-react';

function Trainer() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-10 lg:p-16">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Join Our Mission</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Join as Volunteer Trainer
              </h2>

              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Become a part of our mission to make every rural citizen digitally
                confident. Share your knowledge and empower communities across India.
              </p>

              <button className="group inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Register as Trainer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex-1 relative h-full min-h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-green-800/20"></div>
              <img
                src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Volunteer trainer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Users className="w-8 h-8 text-green-700" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">5,000+</p>
                      <p className="text-gray-600">Volunteer Trainers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainer;
