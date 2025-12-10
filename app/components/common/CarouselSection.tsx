"use client"

import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

interface AppScreen {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
}

const APP_SCREENS: AppScreen[] = [
  {
    id: 1,
    title: "Écran d'accueil",
    description: "Accédez rapidement aux fonctionnalités clés et démarrez votre parcours en toute simplicité.",
    image: "/img3.jpeg",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 2,
    title: "Groupes de Discussion",
    description: "Échangez librement avec d'autres hommes dans un espace sécurisé, bienveillant et guidé vers une masculinité plus saine.",
    image: "/img6.jpeg",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    title: "Ressources Éducatives",
    description: "Accédez à des articles, vidéos et podcasts sélectionnés pour vous aider à développer une compréhension moderne et positive de la masculinité.",
    image: "/img1.jpeg",
    color: "from-purple-500 to-pink-600"
  },

  {
    id: 6,
    title: "Blog",
    description: "Découvrez des histoires inspirantes, des conseils pratiques et des analyses pour enrichir votre réflexion au quotidien.",
    image: "/blog.jpeg",
    color: "from-rose-500 to-red-600"
  },
  {
    id: 7,
    title: "Challenge",
    description: "Relevez des défis personnels conçus pour améliorer votre bien-être émotionnel, renforcer votre confiance et développer de nouvelles habitudes positives.",
    image: "/play.jpeg",
    color: "from-rose-500 to-red-600"
  },
  {
    id: 4,
    title: "Suivi Personnel",
    description: "Mesurez votre évolution au quotidien grâce à des indicateurs simples, motivants et adaptés à votre cheminement.",
    image: "profil.jpeg",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 5,
    title: "Profil & Paramètres",
    description: "Gérez votre identité, votre confidentialité et personnalisez votre expérience selon vos besoins et vos préférences.",
    image: "/profil-1.jpeg",
    color: "from-rose-500 to-red-600"
  }
];

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % APP_SCREENS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + APP_SCREENS.length) % APP_SCREENS.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % APP_SCREENS.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentScreen = APP_SCREENS[currentIndex];

  return (
    <section id="interface" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Découvrez l'Interface
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Une application intuitive conçue pour faciliter votre parcours vers une masculinité positive
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Display */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Phone Mockup */}
            <div className="relative shrink-0">
              <div className="relative w-72 h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10"></div>
                
                {/* Screen Content */}
                <div className={`w-full h-full bg-linear-to-br ${currentScreen.color} rounded-[2.5rem] overflow-hidden flex items-center justify-center relative transition-all duration-500`}>
                  {/* App Icon/Emoji */}
                  <div className="text-9xl animate-bounce-slow">
                   <img src= {currentScreen.image} alt='image' />
                  </div>
                  
                  {/* Screen Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-6 text-white">
                    <h3 className="font-bold text-lg mb-1">{currentScreen.title}</h3>
                  </div>
                </div>

                {/* Phone Home Button */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full"></div>
              </div>

              {/* Smartphone Icon Decoration */}
              <Smartphone className="absolute -top-6 -right-6 w-12 h-12 text-emerald-600 opacity-20" />
            </div>

            {/* Content Side */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                Écran {currentIndex + 1} sur {APP_SCREENS.length}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {currentScreen.title}
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {currentScreen.description}
              </p>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <button
                  onClick={goToPrevious}
                  className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-slate-700 hover:text-emerald-600"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full bg-emerald-600 shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-white hover:bg-emerald-700"
                  aria-label="Suivant"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {APP_SCREENS.map((screen, index) => (
              <button
                key={screen.id}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-emerald-600'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Aller à l'écran ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              {isAutoPlaying ? '⏸ Pause' : '▶ Lecture automatique'}
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { icon: '🔒', text: 'Sécurisé' },
            { icon: '🎨', text: 'Intuitif' },
            { icon: '📱', text: 'Responsive' },
            { icon: '⚡', text: 'Rapide' }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-2">{feature.icon}</div>
              <p className="text-slate-700 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}