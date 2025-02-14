import { useEffect } from "react"
import { urlAssets } from "./utils/constants"
import VideoPlayer from "./components/video-player";
import TextSection from "./components/text-section";
import YearSection from "./components/year-section";
import Teams from "./components/teams";

function App() {
  useEffect(() => {
    const btnUp = document.getElementById("btn-up");

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        btnUp?.classList.add("scroll-btn");
      } else {
        btnUp?.classList.remove("scroll-btn");
      }
    };

    const handleScrollUp = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    btnUp?.addEventListener("click", handleScrollUp);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      btnUp?.removeEventListener("click", handleScrollUp);
    };
  }, []);

  return (
    <>
      <main>
        <VideoPlayer />
        <TextSection />
        <YearSection />
        <Teams />
      </main>
      <button id="btn-up" className="btn-up">
        <img src={`${urlAssets}/img/icons8-arriba.gif`} alt="Subir" />
      </button>
    </>
  )
}

export default App
