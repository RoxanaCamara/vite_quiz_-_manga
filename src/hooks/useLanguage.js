export const useLanguage = () => {
    const getMangaLanguage = (obj) => {
        //let languageTranslate = !language ? 'en' : language;
        const { relationships, attributes } = obj;
        const { title, description } = attributes;
        return {
            title: title.en,
            description: description.en,
            id: obj.id,
            relationships
        };
    };
    return { getMangaLanguage };
};
