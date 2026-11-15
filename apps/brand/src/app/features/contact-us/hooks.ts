import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "@/components/ui/toast"
import { ContactApiResponse, ContactSubmissionPayload, PURPOSE_OPTIONS, UseContactFormOptions } from './types';
import { contactFormSchema, ContactFormValues } from './validations';
import { useApiMutation } from '@/app/hooks/use-api-mutation';



export function useContactForm({
  token,
  defaultPurpose,
  endpoint = '/api/contact',
  onSuccessCallback,
  onErrorCallback,
  onResetTurnstile,
}: UseContactFormOptions = {}) {
  const initialPurpose =
    defaultPurpose && PURPOSE_OPTIONS.includes("Infrastructure & Hosting")
      ? defaultPurpose
      : '';

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
    defaultValues: {
      purpose: initialPurpose,
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  useEffect(() => {
    if (defaultPurpose && PURPOSE_OPTIONS.includes("Infrastructure & Hosting")) {
      form.setValue('purpose', defaultPurpose, { shouldValidate: false });
    }
  }, [defaultPurpose, form]);

  const submission = useApiMutation<ContactApiResponse, ContactSubmissionPayload>({
    endpoint,
    mutationKey: ['contact-submission', endpoint],
    options: {
      onSuccess: (response) => {
        toast.add({
          type: "success",
          description: "WE WILL REPLY WITHIN 24 HOURS."
        });
        onSuccessCallback?.(response);
      },
      onError: (error) => {
        toast.add({
          type: "error",
          description: "UNABLE TO REACH /API/CONTACT.",
          priority: "high",
        });
        onErrorCallback?.(error);
      },
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    if (!token) {
      toast.add({
        type: "error",
        description: "COMPLETE THE TURNSTILE VERIFICATION BEFORE SUBMITTING.",
        priority: "high",
      });
        return;
      }

      submission.mutate({
        ...values,
        turnstileToken: token,
      });
  });

  const resetAll = () => {
      submission.reset();
      onResetTurnstile?.();
      form.reset({
        purpose: initialPurpose,
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    };

    return {
      form,
      onSubmit,
      resetAll,
      submission,
    };
}

export type UseContactFormReturn = ReturnType<typeof useContactForm>;
