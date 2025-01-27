import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getRecommendations: builder.query({
            query: (limit) => ({
                method: 'GET',
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useGetRecommendationsQuery } = recommendationsApi;
