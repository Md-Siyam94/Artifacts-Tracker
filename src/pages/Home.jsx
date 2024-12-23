import Artifacts from "../components/Artifacts";
import Hero from "../components/Hero";
import TourMuseum from "../components/TourMuseum";


const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <Artifacts></Artifacts>
            </section>
            <section>
                <TourMuseum></TourMuseum>
            </section>
        </div>
    );
};

export default Home;