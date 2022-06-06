import { fetcher } from 'utils';
import { IList } from 'types';

interface CreateListProps {
  listName: string;
}

/**
 * `listName`'i parametre olarak alıyorum çünkü o alanı her bir task oluşumunda
 * değiştiriyorum `content` kısmını sabit bir değer olarak bırakıyorum.
 * Burada oluşturulacak listenin description alanına denk geliyor ve ben
 * buraya taskların ne şekilde çalıştığını açıklayıcı bir yazı ekliyorum.
 */

const createList = async ({ listName }: CreateListProps) => {
  const taskRequest: Promise<IList> = await fetcher({
    url: `/folder/${process.env.FOLDER_ID}/list`,
    requestOptions: {
      method: 'POST',
      body: JSON.stringify({
        name: listName,
        content: 'New List Content'
      })
    }
  });
  return taskRequest;
};

export default createList;
