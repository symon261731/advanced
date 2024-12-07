const getQueryParams = (params: Partial<Record<string, string>>) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([name, value]) => {
        searchParams.set(name, value || '');
    });

    return `?${searchParams.toString()}`;
};

export const addQueryParams = (params: Partial<Record<string, string>>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
