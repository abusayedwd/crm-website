const { apiSlice } = require("../api/apiSlice");

const singlProject = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singlProject: builder.query({
            query: (id) => `/project/showProjectById?id=${id}`
        }),
    }),
});

export const { useSinglProjectQuery } = singlProject;


