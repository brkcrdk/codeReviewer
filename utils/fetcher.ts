import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

interface IFetcher {
  url: string;
}

const fetcher = async ({ url }: IFetcher) => {
  const request = await fetch(`https://api.clickup.com/api/v2${url}`, {
    headers: {
      Authorization: String(process.env.API_TOKEN),
      'Content-Type': 'application / json'
    }
  });
  const response = await request.json();
  return response;
};

export default fetcher;
