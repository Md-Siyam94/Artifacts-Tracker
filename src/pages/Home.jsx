import Artifacts from "../components/Artifacts";
import Exhibits from "../components/Exhibits";
import Hero from "../components/Hero";
import RecentArtifacts from "../components/RecentArtifacts";
import TourMuseum from "../components/TourMuseum";


const Home = () => {
    return (
        <div>
            <section className="">
                <Hero></Hero>
            </section>
            <section className="max-w-7xl mx-auto">
                <Artifacts></Artifacts>
            </section>
            <section className="max-w-7xl mx-auto">
                <TourMuseum></TourMuseum>
            </section>
            <section className="max-w-7xl mx-auto">
                <Exhibits></Exhibits>
            </section>
            <section className="max-w-7xl mx-auto ">
                <RecentArtifacts></RecentArtifacts>
            </section>
        </div>
    );
};

export default Home;