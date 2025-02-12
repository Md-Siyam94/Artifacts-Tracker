import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



function MainLayout() {


  return (
    <>
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className=" min-h-[calc(100vh-344px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default MainLayout
