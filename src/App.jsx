import Home from "./components/home";
import Projects from "./components/projects/index";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <main className="scroll-smooth ms-back font-sans text-gray-800 bg-white bg-cover bg-center bg-no-repeat">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  );
}

export default App;