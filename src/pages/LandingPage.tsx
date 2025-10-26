import React from 'react';
import { Hero } from "../components/Hero";
import { SectionTitle } from "../components/SectionTitle";
import { QuickNavGrid } from "../components/QuickNavGrid";
import type { QuickNavItem } from "../components/QuickNavGrid";
import { User, Calendar, Star, DollarSign, Info, Mail } from "lucide-react";
// import { useYogoWidget } from '../hooks/useYogoWidget';

const LandingPage: React.FC = () => {
  // const calendarRef = useYogoWidget('.yogo-calendar');
  // const eventsRef = useYogoWidget('.yogo-events');

  const quickNavItems: QuickNavItem[] = [
    {
      href: "/bli-medlem",
      icon: <User className="h-8 w-8" />, 
      title: "Bli Medlem",
      description: "Få tilgang til alle treningsklasser og medlemsfordeler",
    },
    {
      href: "/timeplan",
      icon: <Calendar className="h-8 w-8" />, 
      title: "Timeplan",
      description: "Se alle treningsklasser og book din plass",
    },
    {
      href: "/events",
      icon: <Star className="h-8 w-8" />, 
      title: "Events",
      description: "Opplev spesielle treningseventer og workshops",
    },
    {
      href: "/priser",
      icon: <DollarSign className="h-8 w-8" />, 
      title: "Priser",
      description: "Se våre enkle og fleksible prisplaner",
    },
    {
      href: "/om-oss",
      icon: <Info className="h-8 w-8" />, 
      title: "Om Oss",
      description: "Lær mer om Krønsj og våre verdier",
    },
    {
      href: "/kontakt",
      icon: <Mail className="h-8 w-8" />, 
      title: "Kontakt",
      description: "Ta kontakt med oss eller finn veien til studio",
    },
  ];

  return (
    <>
      <Hero />
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>
            Utforsk <span className="text-primary-600">Krønsj</span>
          </SectionTitle>
          <QuickNavGrid items={quickNavItems} />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
