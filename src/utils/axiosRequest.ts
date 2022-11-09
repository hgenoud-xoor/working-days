import axios, { AxiosError } from 'axios';

export const getError = (error: AxiosError) => ({
  status: error.response?.status,
  message: (error.response?.data as any).errors,
  code: error.code,
  url: error.response?.config.url,
  method: error.response?.config.method,
});

export const executeMethod = async (
  method: 'POST' | 'GET',
  defaultHeaders: CommonJSON,
  path: string,
  params?: CommonJSON) => {

  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    ...defaultHeaders,
  };

  try {
    const response = await axios({
      headers,
      method,
      url: `https://working-days.p.rapidapi.com/${path}`,
      params,
    });
    return response.data;
  } catch (e: any) {
    const error = e as AxiosError;
    throw error ;
  }
};
