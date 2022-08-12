import Navbar from "./Navbar";
import Home from "./components/Home";

function App() {
  return (
    <main id="home">
      <Navbar />
      <section className="home">
        <Home />
      </section>
      <section className="news" id="news">
        <h1>news</h1>
      </section>
      <section className="products" id="products">
        <h1>products</h1>
      </section>
      <section className="about-us" id="about-us">
        <h1>about us</h1>
      </section>
      <section className="praefects" id="praefects">
        <h1>praefects</h1>
      </section>
      <section className="rest"></section>
    </main>
  );
}

export default App;
