import { Globe, MessageCircle, Lightbulb, Wifi } from 'lucide-react';

function Solution() {
  const features = [
    {
      icon: Globe,
      title: 'Learn Anytime',
      description: 'Access lessons 24/7 at your own pace',
    },
    {
      icon: MessageCircle,
      title: 'Telugu Lessons',
      description: 'All lessons in your own language',
    },
    {
      icon: Lightbulb,
      title: 'Simple Interface',
      description: 'Easy design for all skill levels',
    },
    {
      icon: Wifi,
      title: 'Offline-Friendly',
      description: 'Watch YouTube videos easily',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solution –{' '}
            <span className="text-green-700">DigiPathshala</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A simple, Telugu-based E-learning website that uses YouTube lessons to teach digital literacy for free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solution;
