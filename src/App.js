import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import {Helmet} from "react-helmet";

function App() {
  return (

    <div >
       <Helmet>
                <meta charSet="utf-8" />
                <title>Deepak juneja</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Portfolio website" />
        </Helmet>
      <NavBar/>
      <Home /> 
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks/>
    </div>
  );
}

export default App;
