"use client"
import { Download } from "lucide-react";

export const CTASection: React.FC = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-teal-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Rejoignez le Mouvement pour une Masculinité Engagée et Positive
        </h2>
        <p className="text-2xl text-blue-100 mb-10">
          On peut mieux faire ensemble. Luttons contre la masculinité négative.
        </p>
        <button className="bg-white text-blue-700 px-12 py-5 rounded-full text-2xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-3 mx-auto">
          <Download className="w-8 h-8" />
          <span>Télécharger l'Application</span>
        </button>
        <p className="text-blue-100 mt-6">
          Disponible bientôt sur iOS et Android
        </p>
      </div>
    </section>
  );
  