import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutOverview from './components/AboutOverview';
import FeaturedRooms from './components/FeaturedRooms';
import AccommodationSection from './components/AccommodationSection';
import HotelFacilities from './components/HotelFacilities';
import StealDealSection from './components/StealDealSection';
import CommonQueriesSection from './components/CommonQueriesSection';
import SpotlightsSection from './components/SpotlightsSection';
import CommitmentSection from './components/CommitmentSection';

import IntroVideo from './components/IntroVideo';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      <HeroSection />
      <AboutOverview />
      {/*       <FeaturedRooms /> */}
      <AccommodationSection />
      {/*  <StealDealSection /> */}
      <HotelFacilities />
      <CommonQueriesSection />
      {/* <IntroVideo /> */}


    </div>
  );
}
