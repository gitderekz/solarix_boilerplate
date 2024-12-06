import About from "./components/About/index.jsx";
import Achievement from "./components/Achievement/index.jsx";
import Contacts from "./components/Contacts/index.jsx";
import Faq from "./components/Faq/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Projects from "./components/Projects/index.jsx";
import Services from "./components/Services/index.jsx";
import Teams from "./components/Teams/index.jsx";
import Testimonial from "./components/Testiminial/index.jsx";

function App() {

  return (
    <>
     <Navbar/>
     <Header/>
     <Achievement/>
     <About/>
     <Services/>
     <Teams/>
     <Projects/>
     <Testimonial/>
     <Faq/>
     <Contacts/>
     <Footer/>
    </>
  )
}

export default App
