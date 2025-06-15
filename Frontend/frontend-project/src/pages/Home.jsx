
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Menu from "../components/Menu";
import Reservation from "../components/Reservation";
import Team from "../components/Team";
import Qualities from "../components/Qualities";
import Footer from "../components/Footer";

const Home = () => {
  const testBackendConnection = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/notes`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      console.log(" Backend response:", data);
      alert("Connected! Check console for response.");
    } catch (err) {
      console.error("Connection failed:", err.message);
      alert("Connection failed. See console.");
    }
  };

  return (
    <>
      <Navbar />
      <div id="hero"><HeroSection /></div>
      <div id="about"><About /></div>
      <div id="menu"><Menu /></div>
      <div id="reservation"><Reservation /></div>
      <div id="team"><Team /></div>


      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={testBackendConnection} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Test Backend Connection
        </button>
      </div>

      <Qualities />
      <Footer />
    </>
  );
};

export default Home;
