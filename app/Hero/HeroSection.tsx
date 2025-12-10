import { Download, Users } from "lucide-react";

export const HeroSection: React.FC = () => (
    <section id="accueil" className="pt-40 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 order-1">
            <div className="w-full h-96 bg-linear-to-br from-blue-400 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <img className="object-cover" src="/welcom-boy.png" alt="users"/>
              </div>
            </div>
          </div>
  
          <div className="lg:order-1 order-2">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Bienvenue sur <span className="text-blue-600">Odysse</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Une plateforme dédiée à la promotion d’une <span className="text-blue-700 font-semibold">masculinité positive</span> : 
            un modèle fondé sur le respect, la responsabilité et l’empathie.  
            </p>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            À travers des parcours interactifs et une communauté engagée, nous accompagnons 
            les hommes dans l’adoption de comportements constructifs et modernes, 
            contribuant ainsi à la réduction des <span className="text-blue-900 font-semibold">Violences Basées sur le Genre (VBG)</span>.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <Download className="w-6 h-6" />
              <span>Télécharger l'application</span>
            </button>
            
            {/* <div className="mt-12 bg-linear-to-r from-slate-200 to-slate-300 rounded-2xl p-8 text-center">
                <img src="/onboarding.jpeg"  alt="Mockup de l'application" className="w-24 h-48 mx-auto" />
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );