const { apiSlice } = require("../api/apiSlice");


const contact = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        contact: builder.mutation({
            query: (value) => ({
                url: `/qoute/createProjectList`,
                method: "POST",
                body: value
            })
        })
    })
})

export const {useContactMutation} = contact;