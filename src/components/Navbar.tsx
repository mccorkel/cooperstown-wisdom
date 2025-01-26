import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-baseball-navy">
          DugoutChat
        </div>
        <div className="space-x-4">
          <Button variant="outline" className="font-inter">
            Sign In
          </Button>
          <Button className="bg-baseball-red hover:bg-baseball-red/90 font-inter">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;