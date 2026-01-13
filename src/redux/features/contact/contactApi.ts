import { baseApi } from "@/redux/api/baseApi";

// Type definitions for contact form
export interface ContactFormData {
  full_name: string;
  email: string;
  message: string;
  is_agree: boolean;
}

export interface ContactResponseData {
  id: number;
  full_name: string;
  email: string;
  message: string;
  is_agree: boolean;
  created_at: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data: ContactResponseData;
}

const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    contact: build.mutation<ContactResponse, ContactFormData>({
      query: (body) => ({
        url: "/api/contact/submit/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useContactMutation } = contactApi;
