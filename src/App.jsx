import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/Layouts/Utils/PageNotFound";
import SpeedDial from "./Components/Layouts/Utils/SpeedDial";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndCondition from "./Components/TermsAndCondition";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <SpeedDial />
      </Router>
    </div>
  );
}

export default App;
