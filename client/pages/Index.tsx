import Header from "../components/Header";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import Environment from "../components/Environment";
import Infrastructure from "../components/Infrastructure";
import Courtyards from "../components/Courtyards";
import Architecture from "../components/Architecture";
import Lobby from "../components/Lobby";
import Services from "../components/Services";
import ApartmentSelector from "../components/ApartmentSelector";
import Interior from "../components/Interior";
import StorageAndCommercial from "../components/StorageAndCommercial";
import ConstructionProgress from "../components/ConstructionProgress";
import SalesOffice from "../components/SalesOffice";
import NearbyProjects from "../components/NearbyProjects";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="page-padding-top">
        <Hero />
        <Filters />
        <Environment />
        <Infrastructure />
        <Courtyards />
        <Architecture />
        <Lobby />
        <Services />
        <ApartmentSelector />
        <Interior />
        <StorageAndCommercial />
        <ConstructionProgress />
        <SalesOffice />
        <NearbyProjects />
      </main>
      <Footer />
    </div>
  );
}
