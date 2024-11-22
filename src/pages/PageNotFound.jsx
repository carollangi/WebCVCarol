import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function PageNotFound() {
  return (
    <>
        <Navbar/>
        <div className="wrapper">
            <h3>Ooopsss...</h3>
            <p>Yahh halaman yang Anda tuju gak ditemukan...</p>
        </div>
        <Footer/>
    </>
  )
}

export default PageNotFound