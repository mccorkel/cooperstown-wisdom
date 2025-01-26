import { MessageSquare, Users, Star, Trophy } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Real-time Chat",
    description: "Connect instantly with baseball fans from around the world",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Channels",
    description: "Dedicated spaces for every MLB team's community",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Game Day Discussions",
    description: "Live chat during games with fellow supporters",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Expert Analysis",
    description: "Share insights and discuss strategies with knowledgeable fans",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-baseball-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-baseball-navy mb-12">
          The Ultimate Baseball Fan Experience
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