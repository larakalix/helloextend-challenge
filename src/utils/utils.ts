export const getIdFromDocApiImageUrl = (url: string) => {
    const image = url.split(".");
    const id = image[2].split("/")[3];

    return id;
};
