import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import BliMedlem from "./pages/JoinPage";
import Timeplan from "./pages/CalendarPage";
import Events from "./pages/EventPage";
import Priser from "./pages/PricePage";
import OmOss from "./pages/AboutPage";
import Kontakt from "./pages/ContactPage";
import LoggInn from "./pages/ProfilePage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bli-medlem" element={<BliMedlem />} />
          <Route path="/timeplan" element={<Timeplan />} />
          <Route path="/events" element={<Events />} />
          <Route path="/priser" element={<Priser />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/logg-inn" element={<LoggInn />} />
        </Routes>
      </div>
      <Footer />
      {/* Permanent hidden homes for Yogo widgets */}
      <div id="yogo-widget-homes" style={{ display: 'none' }}>
        <div id="yogo-calendar-home" className="yogo-calendar"></div>
        <div id="yogo-events-home" className="yogo-events"></div>
      </div>
    </div>
  );
}

export default App;