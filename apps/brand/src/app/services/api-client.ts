export interface ApiRequestOptions extends Omit<RequestInit, 'body' | 'method'> {
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

export async function submitJsonApi<TResponse, TPayload>(
  endpoint: string,
  payload: TPayload,
  options?: ApiRequestOptions
): Promise<TResponse> {
  const response = await fetch(endpoint, {
    method: options?.method ?? 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(options?.headers ?? {}),
    },
    body: JSON.stringify(payload),
    ...options,
  });

  if (!response.ok) {
    let errorMessage = `REQUEST FAILED (${response.status})`;
    try {
      const errBody = await response.json();
      if (errBody?.message) {
        errorMessage = String(errBody.message);
      }
    } catch {
      // Preserve HTTP status message if body is not JSON
    }
    throw new Error(errorMessage);
  }

  return (await response.json()) as TResponse;
}
