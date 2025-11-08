import { Quote } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Ramesh Kumar',
      location: 'Telangana',
      text: 'Now I can use my phone to make online payments easily! DigiPathshala\'s Telugu lessons made everything so simple.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Lakshmi Devi',
      location: 'Andhra Pradesh',
      text: 'I learned how to attend online meetings and classes. I can now join my grandchild\'s school meetings from home!',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Suresh Babu',
      location: 'Telangana',
      text: 'The YouTube videos are so clear and in Telugu. I finally understand how to use WhatsApp and YouTube properly.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learners' Stories
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Real people, real transformations through digital literacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-12 h-12 text-green-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
