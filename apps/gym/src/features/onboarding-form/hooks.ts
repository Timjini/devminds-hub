import { useMutation } from "@tanstack/react-query";
import { Onboarding } from "./model/type";
import { api } from "@/lib/api-client";
import { toast } from "@/components/ui/toast";

interface MessageResponse {
  message: string;
}

export const useOnboarding = () => {
  return useMutation<MessageResponse, Error, Onboarding>({
    mutationFn: async (onboardingData: Onboarding) => {
      return api.post<MessageResponse>(`/api/onboarding`, onboardingData);
    },
    onSuccess: (response) => {
      toast.add({
        type: "success",
        description: response.message,
      });
      console.log("response", response);
    },
    onError: (error) => {
      toast.add({
        type: "error",
        description: error.message,
      });
      console.log("useOnboarding failed:", error.message);
    },
  });
};
