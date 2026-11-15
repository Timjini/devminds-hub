import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "@/components/ui/toast"
import { ContactApiResponse, PURPOSE_OPTIONS } from './types';
import { contactFormSchema, ContactFormValues } from './validations';
import { useApiMutation } from '@/app/hooks/use-api-mutation';

export interface UseContactFormOptions {
  defaultPurpose?: ContactFormValues['purpose'];
  endpoint?: string;
  onSuccessCallback?: (response: ContactApiResponse) => void;
  onErrorCallback?: (error: Error) => void;
}

export function useContactForm({
  defaultPurpose,
  endpoint = '/api/contact',
  onSuccessCallback,
  onErrorCallback,
}: UseContactFormOptions = {}) {
  const initialPurpose =
    defaultPurpose && PURPOSE_OPTIONS.includes(defaultPurpose)
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
    if (defaultPurpose && PURPOSE_OPTIONS.includes(defaultPurpose)) {
      form.setValue('purpose', defaultPurpose, { shouldValidate: false });
    }
  }, [defaultPurpose, form]);

  const submission = useApiMutation<ContactApiResponse, ContactFormValues>({
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
    submission.mutate(values);
  });

  const resetAll = () => {
    submission.reset();
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
