import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Index from "./components/Index";
import Works from "./components/Works";
import Text from "./components/Text";
import CV from "./components/CV"
import Exhibitions from "./components/Exhibitions";
import Footer from "./Footer";
import Contact from "./components/Contact";
import ConfirmationPage from "./components/ConfirmationPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/works" element={<Works/>} />
          <Route path="/works/paintings" element={<Works category={"paintings"}/>} />
          <Route path="/works/drawings" element={<Works category={"drawings"}/>} />
          <Route path="/works/collages" element={<Works category={"collages"}/>} />
          <Route path="/works/object" element={<Works category={"object"}/>} />
          <Route path="/text" element={<Text/>}/>
          <Route path="/exhibitions" element={<Exhibitions/>}/>
          <Route path="/cv" element={<CV/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/form-submit" element={<ConfirmationPage/>}/>
          <Route exact path="/" element={<Index/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
