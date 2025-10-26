import React from 'react';
import { ContentList } from '../components/ContentList';
import { ContentText } from '../components/ContentText';
import { Stats } from '../components/Stats';
import { Title } from '../components/Title';
import { Music, Disc3, Heart, Users } from 'lucide-react';



const aboutText = (
  <>
    <p>
      I Torggata 34, i hjertet av Oslo finner du et helt unikt treningssted, med gruppetrening for alle. Hos oss på Krønsj handler trening om bevegelse, musikk og gode opplevelser. Her finner du varierte økter ledet av dyktige instruktører som brenner for faget sitt.
    </p>
    <p>
      Vi teller ikke kalorier og måler ikke midjen – vi fokuserer på helhet, flyt, energi og treningsglede.
    </p>
    <p>
      Som Norges første treningssenter med eget discorom kan du danse 10 minutter før eller etter trening. Vi tilbyr også meditasjon og tilstedeværelse med fokus på pust – som er ren magi for å redusere stress og bedre helse.
    </p>
    <p className="font-medium text-gray-800">
      Du kommer for treningen, men blir værende for følelsen Krønsj gir deg og fellesskapet.
    </p>
    <p className="text-xl font-semibold text-primary-600">Krønsj beveger deg!</p>
  </>
);

const aboutFeatures = [
  {
    icon: <Music className="h-6 w-6 text-primary-600" />, 
    title: 'Musikk & Bevegelse',
    description: 'Trening med fokus på bevegelse, musikk og gode opplevelser - ikke kaloritelling.',
    colorClass: 'bg-primary-100',
  },
  {
    icon: <Disc3 className="h-6 w-6 text-accent-600" />, 
    title: 'Norges Første Discorom',
    description: 'Dans 10 minutter før eller etter trening i vårt unike discorom.',
    colorClass: 'bg-accent-100',
  },
  {
    icon: <Heart className="h-6 w-6 text-secondary-600" />, 
    title: 'Meditasjon & Pust',
    description: 'Tilstedeværelse med fokus på pust - ren magi for å redusere stress og bedre helse.',
    colorClass: 'bg-secondary-100',
  },
  {
    icon: <Users className="h-6 w-6 text-primary-600" />, 
    title: 'Dyktige Instruktører',
    description: 'Varierte økter ledet av instruktører som brenner for faget sitt.',
    colorClass: 'bg-primary-100',
  },
];

const aboutStats = [
  { value: '500+', label: 'Fornøyde Medlemmer' },
  { value: '50+', label: 'Klasser per Uke' },
  { value: '8', label: 'Ekspert Instruktører' },
  { value: '1', label: 'Discorom i Norge' },
];



const OmOss: React.FC = () => (
  <div className="pt-16 px-4 md:px-8 max-w-7xl mx-auto">
    <Title>OM KRØNSJ</Title>
    <ContentText
      heading={""}
      text={aboutText}
      image="https://static.wixstatic.com/media/390aa3_48e43adb22a0411ea2845769000d6f54~mv2.jpg"
      imageAlt="Krønsj Training Studio - moderne treningsstudio interiør"
      imageLeft={false}
    />
    <ContentList
      features={aboutFeatures}
      image="https://static.wixstatic.com/media/390aa3_48e43adb22a0411ea2845769000d6f54~mv2.jpg"
      imageAlt="Krønsj Training Studio - moderne treningsstudio interiør"
      imageLeft={true}
    />
    <div className="mt-20">
      <Stats stats={aboutStats} />
    </div>
  </div>
);

export default OmOss;
