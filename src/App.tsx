import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Selector from "./components/Selector";
import { useEffect, useState } from "react";
import { urlAssets } from "./utils/constants";
import SelectComponent from "./components/Select";
import PlayersFilter from "./components/PlayersFilter";

function App() {
  const [page, setPage] = useState<number>(1);
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
        <Selector setPage={setPage} page={page} />
        {page === 1 && <SelectComponent />}
        {page === 2 && <PlayersFilter />}
      </main>
      <button id="btn-up" className="btn-up">
        <img src={`${urlAssets}/icons8-arriba.gif`} alt="Subir" />
      </button>
    </>
  );
}

export default App;
