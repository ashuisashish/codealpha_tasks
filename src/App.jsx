import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
