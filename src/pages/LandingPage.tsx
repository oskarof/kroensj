import React from 'react';
import { HeroSection } from "../components/HeroSection";
import { SectionTitle } from "../components/SectionTitle";
import { CardGrid } from "../components/CardGrid";
import type { CardItem } from "../components/CardGrid";
import { User, Calendar, Star, DollarSign, Info, Mail } from "lucide-react";
// import { useYogoWidget } from '../hooks/useYogoWidget';

const LandingPage: React.FC = () => {
  // const calendarRef = useYogoWidget('.yogo-calendar');
  // const eventsRef = useYogoWidget('.yogo-events');

  const cardItems: CardItem[] = [
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
      <HeroSection
        title="I hjertet av Oslo"
        highlight="Krønsj beveger deg!"
        subtitle="Gruppetimer, flinke instruktører og unike fasiliteter."
        backgroundImage="https://static.wixstatic.com/media/390aa3_c9182ca2622b435fa4397118e0872ecf~mv2.jpg/v1/fill/w_3044,h_1910,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/390aa3_c9182ca2622b435fa4397118e0872ecf~mv2.jpg"
        scrollToId="classes"
        buttons={[
          {
            text: "Bli medlem",
            href: "/bli-medlem",
            variant: "primary",
            className: "hover:-translate-y-1",
            icon: <User className="ml-2 h-5 w-5" />,
          },
          {
            text: "Timeplan",
            href: "/timeplan",
            variant: "secondary",
            className: "hover:-translate-y-1",
            icon: <Calendar className="ml-2 h-5 w-5" />,
          },
        ]}
      />
      <section className="bg-gray-50 py-20" id="classes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>
            Utforsk <span className="text-primary-600">Krønsj</span>
          </SectionTitle>
          <CardGrid items={cardItems} />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
