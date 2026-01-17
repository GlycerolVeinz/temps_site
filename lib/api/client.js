import axios from 'axios';

let apiClient;

export function getApiClient() {
  if (apiClient) return apiClient;

  const baseURL = process.env.API_BASE || process.env.NEXT_PUBLIC_API_BASE;

  if (!baseURL) {
    throw new Error('API base URL is not configured (set API_BASE or NEXT_PUBLIC_API_BASE).');
  }

  apiClient = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-store',
    },
  });

  return apiClient;
}

export default getApiClient;
