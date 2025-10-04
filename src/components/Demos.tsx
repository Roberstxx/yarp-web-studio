import { ExternalLink } from "lucide-react";
import demoRestaurant from "@/assets/demo-restaurant.png";
import demoCafe from "@/assets/demo-cafe.png";
import demoBoutique from "@/assets/demo-boutique.png";

const demos = [
  {
    title: "Restaurante — Jada Burger",
    image: demoRestaurant,
    url: "#",
  },
  {
    title: "Cafetería — Aroma Café",
    image: demoCafe,
    url: "#",
  },
  {
    title: "Tienda — Boutique Luna",
    image: demoBoutique,
    url: "#",
  },
];

const Demos = () => {
  return (
    <section id="demos" className="py-24 px-6 bg-[hsl(var(--surface-light))] text-[hsl(0_0%_6%)]">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[hsl(0_0%_6%)]">
            Previsualiza nuestras webs
          </h2>
          <p className="text-xl text-[hsl(220_9%_35%)] max-w-3xl mx-auto">
            Ejemplos reales de sitios creados por YARP Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <a
              key={demo.title}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold text-[hsl(0_0%_6%)]">
                  {demo.title}
                </h3>
                <ExternalLink
                  className="text-[hsl(170_100%_37%)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;
