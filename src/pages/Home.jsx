import Artifacts from "../components/Artifacts";
import Exhibits from "../components/Exhibits";
import Hero from "../components/Hero";
import TourMuseum from "../components/TourMuseum";


const Home = () => {
    return (
        <div>
            <section className="px-10 mt-4">
                <Hero></Hero>
            </section>
            <section>
                <Artifacts></Artifacts>
            </section>
            <section>
                <TourMuseum></TourMuseum>
            </section>
            <section>
                <Exhibits></Exhibits>
            </section>
        </div>
    );
};

export default Home;