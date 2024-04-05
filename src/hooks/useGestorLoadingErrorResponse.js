export const useGestorLoadingErrorResponse = () => {
    const setResponse = (resp) => {
        return { loading: false, error: false, resp };
    };
    const setLoading = () => {
        return { loading: false, error: false, resp: null };
    };
    const setError = () => {
        return { loading: false, error: false, resp: null };
    };

    const getEndpointGestor = async (getEndpoint, getConvertidor, setValue) => {
        setLoading();
        await getEndpoint
            .then((resp) => {
                setValue(
                    setResponse(resp.data.data.map((e) => getConvertidor(e)))
                );
            })
            .catch(() => setError());
    };

    return { getEndpointGestor };
};
