import { useEffect } from "react"
import VideoPlayer from "./components/video-player";
import TextSection from "./components/text-section";
import YearSection from "./components/year-section";
import Teams from "./components/teams";
import FlourishList from "./components/killers";
import { domainAssets } from "./utils/constants";

function App() {

  useEffect(() => {
    const btnUp = document.getElementById("btn-up");

    const handleScroll = () => {
      if (window.scrollY >= 3000) {
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
        <div id="goleadores">
          <FlourishList startYear={2024} endYear={2022}/>
          <div className="text-img">
            <img className="text-img__one--number" src={`${domainAssets}img/peruano-number.png`} alt="GOLEADOR PERUANO" width={70} height={144}/>
            <img className="text-img__one--text" src={`${domainAssets}img/peruano-text.png`} alt="GOLEADOR PERUANO" width={412} height={61}/>
           </div>
          <FlourishList startYear={2021} endYear={2019}/>
          <div className="text-img">
             <img className="text-img__two" src={`${domainAssets}img/herrera.png`} alt="EMANUEL HERRERA" width={412} height={177}/>
           </div>
           <FlourishList startYear={2018} endYear={2018}/>
          <div className="text-img">
            <img className="text-img__three" src={`${domainAssets}img/african.png`} alt="AKÉ LOBA" width={348} height={105}/>
          </div>
        <FlourishList startYear={2017} endYear={2015}/>
        <div className="text-img">
          <img className="text-img__four" src={`${domainAssets}img/alianza.png`} alt="ALIANZA LIMA" width={444} height={104}/>
        </div>
        <FlourishList startYear={2014} endYear={2009}/>
        <div className="text-img">
          <img className="text-img__five--number" src={`${domainAssets}img/cristal-number.png`} alt="SPORTING CRISTAL" width={70} height={144}/>
          <img className="text-img__five--text" src={`${domainAssets}img/cristal-text.png`} alt="SPORTING CRISTAL DATO" width={412} height={116}/>
        </div>
        <FlourishList startYear={2008} endYear={2001}/>
        <div className="legend">
          <p>Investigación: Raúl Castillo Vela</p>
          <p>Diseño: Christian Marlow</p>
          <p>Programación: Martin Núñez</p>
        </div>
        </div>
        <button id="btn-up" className="btn-up">
          <img src={`${domainAssets}icons/arrow-up.png`} alt="Subir" />
        </button>
      </main>
    </>
  )
}

export default App
