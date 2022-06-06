import { fetcher } from 'utils';
import { IList } from 'types';

interface CreateListProps {
  listName: string;
}

/**
 * `listName`'i parametre olarak alıyorum çünkü o alanı her bir liste oluşumunda
 * değiştiriyorum `content` kısmını sabit bir değer olarak bırakıyorum.
 * Burada oluşturulacak listenin description alanına denk geliyor ve ben
 * buraya taskların ne şekilde çalıştığını açıklayıcı bir yazı ekliyorum.
 *
 * Ben listeyi oluştururken, task yapılacak haftanın tarih aralığını vermeyi tercih
 * ediyorum. Bu nedenle oluşturulacak her liste o günün tarihi ve sonraki 4 gün
 * aralığını içeren isim formatı ile oluşturulmuş olacak.
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
