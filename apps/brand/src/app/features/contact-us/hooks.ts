import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactApiResponse, PURPOSE_OPTIONS } from './types';
import { contactFormSchema, ContactFormValues } from './validations';
import { useApiMutation } from '@/app/hooks/use-api-mutation';

export interface UseContactFormOptions {
  defaultPurpose?: string;
  endpoint?: string;
  onSuccessCallback?: (response: ContactApiResponse) => void;
}

export function useContactForm({
  defaultPurpose = PURPOSE_OPTIONS[0],
  endpoint = '/api/contact',
  onSuccessCallback,
}: UseContactFormOptions = {}) {
  const validInitialPurpose = PURPOSE_OPTIONS.includes(defaultPurpose)
    ? defaultPurpose
    : PURPOSE_OPTIONS[0];

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
    defaultValues: {
      purpose: validInitialPurpose,
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
        onSuccessCallback?.(response);
      },
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    submission.mutate(values);
  });

  const resetAll = () => {
    submission.reset();
    form.reset({
      purpose: validInitialPurpose,
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
