import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Selector from "./components/Selector"
import Fixture from "./components/Fixture"
import { useEffect, useState } from "react"
import { urlAssets } from "./utils/constants"
import Calendar from "./components/Calendar"

function App() {
  const [page, setPage] = useState<number>(1)
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
        <Header page={page} />
        <Selector setPage={setPage} page={page} />
        {page === 1 && (
          <>
            <p className="selector__message">Dale clic sobre tu equipo para ver sus partidos</p>
            <Fixture />
          </>
        )}
        {page === 2 && <Calendar />}
      </main>
      <button id="btn-up" className="btn-up">
        <img src={`${urlAssets}/img/icons8-arriba.gif`} alt="Subir" />
      </button>
    </>
  )
}

export default App
