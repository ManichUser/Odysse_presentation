import { Testimonial, Stat } from "@/app/types/index";


const TestimonialCard: React.FC<Testimonial> = ({ quote, author, level }) => (
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <p className="text-lg text-slate-700 mb-6 italic">
        "{quote}"
      </p>
      <div className="border-t pt-4">
        <p className="font-bold text-slate-900">{author}</p>
        <p className="text-sm text-blue-600">{level}</p>
      </div>
    </div>
  );
  
  const StatCard: React.FC<Stat> = ({ number, label }) => (
    <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
      <p className="text-4xl font-bold text-blue-600 mb-2">{number}</p>
      <p className="text-slate-600">{label}</p>
    </div>
  );
  
  export  const TestimonialsSection: React.FC = () => {
    const testimonials: Testimonial[] = [
      {
        quote: "J'ai appris à communiquer mes émotions sans violence. Ma famille me remercie chaque jour.",
        author: "L'homme, 34 ans",
        level: "Niveau odysse Muna"
      },
      {
        quote: "Les challenges m'ont aidé à devenir un meilleur père. Je suis plus présent et à l'écoute.",
        author: "Man237, 41 ans",
        level: "250 missions accomplies"
      },
      {
        quote: "Cette plateforme m'a donné un espace sûr pour parler de mes difficultés sans jugement.",
        author: "Mr P, 28 ans",
        level: "Champion du mois"
      }
    ];
  
    const stats: Stat[] = [
      { number: '10,000+', label: 'Hommes engagés' },
      { number: '500+', label: 'Missions disponibles' },
      { number: '95%', label: 'Taux de satisfaction' },
      { number: '50+', label: 'Villes couvertes' }
    ];
  
    return (
      <section id="témoignages" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ce Que Disent Nos Champions
            </h2>
            <p className="text-xl text-slate-600">
              Des transformations réelles, des impacts mesurables
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
  
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
  
          <div className="mt-12">
            <p className="text-center text-slate-600 mb-6">Partenaires & Soutiens</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["/logo1.png", "/logo2.png", "logo3.png", "logo4.png"].map(i => (
                <div key={i} className="w-32 h-32 bg-white rounded-2xl shadow flex items-center justify-center">
                  <img src={i} alt="logo"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  