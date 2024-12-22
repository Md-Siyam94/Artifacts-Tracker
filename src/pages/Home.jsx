import Artifacts from "../components/Artifacts";
import Hero from "../components/Hero";


const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <Artifacts></Artifacts>
            </section>
        </div>
    );
};

export default Home;