import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



function MainLayout() {


  return (
    <>
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl mx-auto min-h-[calc(100vh-440px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default MainLayout
