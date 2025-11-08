import { useState } from 'react';
import { Monitor, Smartphone, Shield, Video, Play, X } from 'lucide-react';

interface Course {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
  color: string;
  youtubeId: string;
}

function Courses() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const courses: Course[] = [
    {
      icon: Monitor,
      title: 'Basic Computer Skills',
      description: 'Learn How to Use a Computer — Keyboard, Mouse, and Essential Tasks',
      color: 'from-green-500 to-green-600',
      youtubeId: '_peDD5zOs-E',
    },
    {
      icon: Smartphone,
      title: 'Smartphone Usage',
      description: 'How to Use Mobile Phone for Beginners in Telugu',
      color: 'from-orange-500 to-orange-600',
      youtubeId: '',
    },
    {
      icon: Shield,
      title: 'Internet Safety & Online Payments',
      description: 'UPI, Online Payments & Internet Safety in Telugu',
      color: 'from-green-600 to-green-700',
      youtubeId: 'Cby61fClPCY',
    },
    {
      icon: Video,
      title: 'Digital Communication Tools',
      description: 'How to Use WhatsApp, YouTube & Zoom in Telugu',
      color: 'from-orange-600 to-orange-700',
      youtubeId: 'SW2IbCDwEas',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You'll Learn
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Free Telugu video lessons on essential digital skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${course.color} p-8 relative h-48 flex items-center justify-center cursor-pointer`} onClick={() => setSelectedVideo(course.youtubeId)}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${course.color} p-3 rounded-xl flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {course.description}
                      </p>
                      <button
                        onClick={() => setSelectedVideo(course.youtubeId)}
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold hover:gap-3 transition-all"
                      >
                        <Play className="w-4 h-4" />
                        Watch in Telugu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Lesson Video</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="DigiPathshala Lesson"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Courses;
