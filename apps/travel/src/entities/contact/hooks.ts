import { api } from "@/app/lib/api-client";
import { toast } from "@/components/ui/toast";
import { CONTACT } from "@/constant/appGlobal";
import { useMutation } from "@tanstack/react-query";
import { ContactProps } from ".";
import { JsonApiSingleResponse } from "../shared";

export const useCreateContact = () => {
  return useMutation<JsonApiSingleResponse<ContactProps>, Error, ContactProps>({
    mutationFn: async (contactData: ContactProps) => {
      const response = await api.post<JsonApiSingleResponse<ContactProps>>(
        `${CONTACT}`,
        contactData,
      );
      return response;
    },
    onSuccess: (response) => {
      console.log("response on Success", response);
      toast.add({
        type: "success",
        description: response?.data?.message || "Message sent successfully!",
      });
    },
    onError: (error) => {
      toast.add({
        type: "error",
        description:
          error?.message || "Failed to send message. Please try again.",
      });
    },
  });
};
