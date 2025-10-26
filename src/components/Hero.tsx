import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh] w-full py-16 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">I hjertet av Oslo
Krønsj beveger deg!</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center">Gruppetimer, flinke instruktører og unike fasiliteter.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link to="/bli-medlem">Bli medlem</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/timeplan">Timeplan</Link>
        </Button>
      </div>
    </section>
  );
}