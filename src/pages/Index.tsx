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
            Where Baseball Fans Unite
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join thousands of passionate fans in real-time discussions about America's favorite pastime.
          </p>
          <Button className="bg-white text-baseball-navy hover:bg-gray-100 font-semibold text-lg px-8 py-6">
            Get Started Free
          </Button>
        </div>
      </section>

      <Features />

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-baseball-navy mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with fans from all 30 MLB teams. Share your passion, discuss games, and make new friends.
          </p>
          <Button className="bg-baseball-red hover:bg-baseball-red/90 font-semibold text-lg px-8 py-6">
            Start Chatting Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;