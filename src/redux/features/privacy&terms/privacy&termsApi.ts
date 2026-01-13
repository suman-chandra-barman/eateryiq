import { baseApi } from "@/redux/api/baseApi";

const privacyAndTermsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPrivacyPolicy: build.query({
      query: (body) => ({
        url: "/api/privacy/",
        method:"GET",
        body,
      }),
    }),
    getTermsOfService: build.query({
      query: (body) => ({
        url: "/api/terms/",
        method:"GET",
        body,
      }),
    }),
  }),
});

export const { useGetPrivacyPolicyQuery, useGetTermsOfServiceQuery } = privacyAndTermsApi;