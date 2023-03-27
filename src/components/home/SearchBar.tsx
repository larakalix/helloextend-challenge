"use client";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { Title } from "../generic/Title";

export const SearchBar = () => {
    const { push } = useRouter();

    return (
        <nav className="sticky top-0 bg-[rgb(255, 255, 255, .95)] backdrop-blur-lg z-10 py-10">
            <Title className="mb-5">
                <span>Dog Breeds</span>
            </Title>

            <Formik
                initialValues={{ search: "" }}
                onSubmit={({ search }, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(search);
                        push(`/${search.toLowerCase()}`);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex flex-wrap rounded-[0.25rem] overflow-hidden bg-gray-200"
                    >
                        <input
                            type="text"
                            name="search"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="ex: pug, labrador, etc."
                            // value={values.breed}
                            className="bg-transparent px-4 py-2 flex-1"
                        />
                        {errors.search && touched.search && errors.search}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center gap-2 px-2 py-2 bg-blue-500 text-white rounded-[0.25rem] w-10 md:w-[6.25rem]"
                        >
                            <CiSearch className="w-5 h-5" />
                            <span className="hidden md:block">Submit</span>
                        </button>
                    </form>
                )}
            </Formik>
        </nav>
    );
};
