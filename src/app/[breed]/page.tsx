import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { RiArrowDropRightLine } from "react-icons/ri";
import { BreedService } from "@/services/breed/BreedService";
import { Title } from "@/components/generic/Title";
import { DogList } from "@/components/breed/DogList";

type Props = {
    params: { breed: string };
};

const Breed = async ({ params: { breed } }: Props) => {
    const dogs = await BreedService().getByBreed({ breed, count: 12 });

    return (
        <>
            <div className="flex items-center mb-10 gap-2">
                <Link href="/">
                    <GrHomeRounded className="w-3" />
                </Link>
                <RiArrowDropRightLine />
                <Title>
                    <span className="capitalize">{breed} breed results</span>
                </Title>
            </div>
            <section>
                <DogList dogs={dogs.message} />
            </section>
        </>
    );
};

export default Breed;
