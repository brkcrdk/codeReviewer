import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

interface IFetcher {
  url: string;
}

const fetcher = ({ url }: IFetcher) => {
  return fetch(url, {
    headers: {
      Authorization: String(process.env.API_TOKEN),
      'Content-Type': 'application / json'
    }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default fetcher;
