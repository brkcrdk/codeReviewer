import { fetcher } from 'utils';
import { IList } from 'types';

const createList = async () => {
  const taskRequest: Promise<IList> = await fetcher({
    url: `/folder/${process.env.FOLDER_ID}/list`,
    requestOptions: {
      method: 'POST',
      body: JSON.stringify({
        name: 'New List Name21',
        content: 'New List Content'
      })
    }
  });
  return taskRequest;
};

export default createList;
