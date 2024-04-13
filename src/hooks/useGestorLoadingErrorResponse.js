export const useGestorLoadingErrorResponse = () => {
    const setResponse = (resp) => {
        return { loading: false, error: false, resp };
    };
    const LOADING = { loading: true, error: false, resp: null };

    const ERROR = { loading: false, error: true, resp: null };

    const getEndpointGestor = async (getEndpoint, getConvertidor, setValue) => {
        setValue(LOADING);
        await getEndpoint
            .then((resp) => {
                setValue(
                    setResponse(resp.data.data.map((e) => getConvertidor(e)))
                );
            })
            .catch(() => setValue(ERROR));
    };

    return { getEndpointGestor };
};
