export interface JsonApiResource<T> {
  id: string;
  type: string;
  status?: number;
  message: string;
}

export interface JsonApiResponse<T> {
  data: JsonApiResource<T>[];
}

export interface JsonApiSingleResponse<T> {
  data: JsonApiResource<T>;
}
