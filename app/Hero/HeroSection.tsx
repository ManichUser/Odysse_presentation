import { Download, Users } from "lucide-react";

export const HeroSection: React.FC = () => (
    <section id="accueil" className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="w-full h-96 bg-linear-to-br from-blue-400 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <img src="/welcom-boy.png" alt="users"/>
              </div>
            </div>
          </div>
  
          <div className="order-1 md:order-2">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Bienvenue sur la plateforme de la <span className="text-blue-600">masculinité positive</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Une communauté digitale innovante qui encourage les hommes à adopter des comportements responsables, bienveillants et modernes.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <Download className="w-6 h-6" />
              <span>Télécharger l'application</span>
            </button>
            
            <div className="mt-12 bg-linear-to-r from-slate-200 to-slate-300 rounded-2xl p-8 text-center">
              <p className="text-slate-600">📱 Mockup application à insérer ici</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );