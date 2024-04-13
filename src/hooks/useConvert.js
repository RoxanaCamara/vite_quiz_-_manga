export const useConvert = () => {
    const getConvertDataMangas = (obj) => {
        //let languageTranslate = !language ? 'en' : language;
        const { relationships, attributes } = obj;
        const { title, description } = attributes;
        console.log(getIdCovertArt(relationships));
        return {
            title: title.en,
            description: description.en,
            id: obj.id,
            relationships,
            idCoverArt: getIdCovertArt(relationships).id
        };
    };

    const getIdCovertArt = (relationships) => {
        return relationships.find((e) => e.type === 'cover_art');
    };
    return { getConvertDataMangas };
};
