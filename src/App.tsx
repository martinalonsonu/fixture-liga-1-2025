import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Selector from "./components/Selector";
import Fixture from "./components/Fixture";
import { useEffect } from "react";
import { urlAssets, urlClubIcons } from "./utils/constants";

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
      <Navbar />
      <main>
        <Header />
        <img
          src={`${urlAssets}/img/dt-ec.png?d=2`}
          alt="DT | El Comercio"
          className="header__dt"
          width={125}
        />
        <Selector />
        <p className="selector__message">
          Dale clic sobre tu equipo para ver sus partidos
        </p>
        <Fixture />
      </main>
      <button id="btn-up" className="btn-up">
        <img src={`${urlAssets}/img/icons8-arriba.gif`} alt="Subir" />
      </button>
    </>
  );
}

export default App;
