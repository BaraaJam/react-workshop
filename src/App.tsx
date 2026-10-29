import Navbar from "./components/layout/Navbar.tsx";
import Newsletter from "./components/layout/Newsletter.tsx";
import Footer from "./components/layout/Footer.tsx";

function App() {
  return (
      <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
        <Navbar />
          <div>
              <Newsletter />
              <Footer />
          </div>
      </div>
  )
}

export default App
