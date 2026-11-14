import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ApiRequestOptions, submitJsonApi } from '../services/api-client';

export interface UseApiMutationConfig<TResponse, TPayload> {
  endpoint: string;
  mutationKey?: readonly unknown[];
  requestOptions?: ApiRequestOptions;
  mutationFn?: (payload: TPayload) => Promise<TResponse>;
  options?: Omit<UseMutationOptions<TResponse, Error, TPayload>, 'mutationFn' | 'mutationKey'>;
}

export function useApiMutation<TResponse, TPayload>({
  endpoint,
  mutationKey,
  requestOptions,
  mutationFn,
  options,
}: UseApiMutationConfig<TResponse, TPayload>) {
  const mutation = useMutation<TResponse, Error, TPayload>({
    mutationKey: mutationKey ?? ['api-mutation', endpoint],
    mutationFn:
      mutationFn ??
      ((payload: TPayload) => submitJsonApi<TResponse, TPayload>(endpoint, payload, requestOptions)),
    ...options,
  });

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    reset: mutation.reset,
    status: mutation.status,
    isIdle: mutation.isIdle,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    data: mutation.data,
    error: mutation.error,
  };
}
