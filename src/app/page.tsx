import { DogList } from "@/components/home/DogList";
import { SearchBar } from "@/components/home/SearchBar";
import { BreedService } from "@/services/breed/BreedService";

const Home = async () => {
    const dogs = await BreedService().getRandom({ count: 12 });

    return (
        <>
            <section className="flex flex-col">
                <SearchBar />

                <DogList dogs={dogs.message} />
            </section>
        </>
    );
};

export default Home;
