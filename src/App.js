import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/experience/Experience";
import Education from "./components/testimonials/Testimonials";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavProvider } from "./store/navstate";

function App() {
  return (
    <NavProvider>
    <Header />
    <Nav />
    <About />
    <Education />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </NavProvider>
  );
}
export default App;





// function App() {
//   return (
//     // <BrowserRouter>
//     <>
//       <Header />
//       <Nav />
//       <About />
//       <Education />
//       <Skills />
//       <Portfolio />
//       <Contact />
//       <Footer />
//     </>
//     // </BrowserRouter>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       <Header/>
//       <Nav/>
//       <About/>
//       <Experience/>
//       <Services/>
//       <Portfolio/>
//       <Testimonials/>
//       <Contact/>
//       <Footer/>
//     </>
//   );
// }

// export default App;

{
  /* <Routes>
        <Route path="/" exact component={<Header />} />
        <Route path="/about" component={<About />} />
        <Route path="/experience" component={<Experience />} />
        <Route path="/services" component={<Services />} />
        <Route path="/contact" component={<Contact />} />

        <Route path="/portfolio" exact component={<Portfolio />} />
        <Route path="/testimonials" component={<Testimonials />} />
        <Route path="/footer" component={<Footer />} />
      </Routes>
      <Nav /> */
}
