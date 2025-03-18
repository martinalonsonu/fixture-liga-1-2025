import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Selector from "./components/Selector"
import TableTeams from "./components/TableTeams"
import { useEffect, useState } from "react"
import { urlAssets } from "./utils/constants"
import TableCountry from "./components/TableCountry"
import TableClasic from "./components/TableClasic"
import { useFetch } from "./utils/useFetch"

function App() {
  const [page, setPage] = useState<number>(1)
  const {data, loading, groupedData} = useFetch()
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
        {page === 1 && <TableTeams data={data} loading={loading}/>}
        {page===2 && <TableCountry groupedData={groupedData} />}
        {page===3 && <TableClasic />}
      </main>
      <button id="btn-up" className="btn-up">
        <img src={`${urlAssets}/img/icons8-arriba.gif`} alt="Subir" />
      </button>
    </>
  )
}

export default App
