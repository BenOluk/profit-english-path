import { Clock, Home, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Trabalhe só 3h por dia",
    description: "Mais leveza, mais tempo pra você",
  },
  {
    icon: Home,
    title: "100% Home Office",
    description: "Clientes do mundo todo, você no seu sofá",
  },
  {
    icon: GraduationCap,
    title: "Sem diploma, sem enrolação",
    description: "Você já tem o que precisa pra começar agora",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hero/10 to-transparent" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-8 text-center group hover:border-gradient-pink/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;