import { baseApi } from "@/redux/api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    contact: build.mutation({
      query: (body) => ({
        url: "/api/contact/submit/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useContactMutation } = contactApi;
