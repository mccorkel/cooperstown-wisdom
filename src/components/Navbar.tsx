import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-baseball-navy/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-graduate tracking-wider text-baseball-navy">
          Cooperstown Wisdom
        </div>
        <div className="space-x-4">
          <Button variant="outline" className="font-graduate tracking-wide">
            Sign In
          </Button>
          <Button className="bg-baseball-red hover:bg-baseball-red/90 font-graduate tracking-wide">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;