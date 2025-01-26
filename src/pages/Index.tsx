import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-baseball-navy to-baseball-red/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect with Baseball's Virtual Veterans
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Chat with AI old-timers who know every stat, every game, and every moment in your team's history.
          </p>
          <Button className="bg-white text-baseball-navy hover:bg-gray-100 font-semibold text-lg px-8 py-6">
            Step Up to the Plate
          </Button>
        </div>
      </section>

      <Features />

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-baseball-navy mb-6">
            Your Personal Baseball Time Machine
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether it's the 1927 Yankees or last night's game, our AI veterans have every detail ready to share.
          </p>
          <Button className="bg-baseball-red hover:bg-baseball-red/90 font-semibold text-lg px-8 py-6">
            Join the Conversation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;