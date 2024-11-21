
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.168:4040/api/v1",
 
  }),
//   tagTypes: ["Project", "Customer", "Employee", "Coupon", "About"],  

  endpoints: () => ({}),
});
