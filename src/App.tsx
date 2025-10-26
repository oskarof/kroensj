import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import BliMedlem from "./pages/BliMedlem";
import Timeplan from "./pages/Timeplan";
import Events from "./pages/Events";
import Priser from "./pages/Priser";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";
import LoggInn from "./pages/LoggInn";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
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
      </main>
      {/* Permanent hidden homes for Yogo widgets */}
      <div id="yogo-widget-homes" style={{ display: 'none' }}>
        <div id="yogo-calendar-home" className="yogo-calendar"></div>
        <div id="yogo-events-home" className="yogo-events"></div>
      </div>
    </div>
  );
}

export default App;