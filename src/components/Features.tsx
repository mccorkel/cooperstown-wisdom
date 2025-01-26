import { MessageSquare, Database, Star, Trophy } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "AI Baseball Veterans",
    description: "Chat with AI old-timers who've memorized every stat and story",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Complete History",
    description: "Access detailed stats and stories from every era of baseball",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Team Expertise",
    description: "Deep knowledge of your team's entire history, from inception to now",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Game Analysis",
    description: "Get expert insights on historical games and modern matchups",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-baseball-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-baseball-navy mb-12">
          Baseball Knowledge Through the Ages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-baseball-red mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-baseball-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;