export const useLanguage = () => {
    const getMangaLanguage = (obj) => {
        console.log(
            '🚀 ----------------------------------------------------------🚀'
        );
        console.log(
            '🚀 ~ file: useLanguage.js:4 ~ getMangaLanguage ~ obj:',
            obj
        );
        console.log(
            '🚀 ----------------------------------------------------------🚀'
        );

        //let languageTranslate = !language ? 'en' : language;
        const { title, description, relationships } = obj.attributes;
        return {
            title: title.en,
            description: description.en,
            id: obj.id,
            relationships
        };
    };
    return { getMangaLanguage };
};
