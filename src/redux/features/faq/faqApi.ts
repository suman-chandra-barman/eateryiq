import { baseApi } from "@/redux/api/baseApi";

const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFaq: build.query({
        query: () => ({
            url: "/api/faq/",
            method: "GET",
        }),
    }),
  }),
});

export const { useGetAllFaqQuery } = faqApi;