import dotenv from 'dotenv';
import fetch, { HeadersInit, RequestInit } from 'node-fetch';

dotenv.config();

interface IFetcher {
  url: string;
  headerOptions?: HeadersInit;
  requestOptions?: RequestInit;
}

const fetcher = async ({ url, headerOptions, requestOptions }: IFetcher) => {
  const request = await fetch(`https://api.clickup.com/api/v2${url}`, {
    headers: {
      Authorization: String(process.env.API_TOKEN),
      'Content-Type': 'application/json',
      ...headerOptions
    },
    ...requestOptions
  });
  const response = await request.json();
  return response;
};

export default fetcher;
