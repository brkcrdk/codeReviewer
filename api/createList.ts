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
  // liste oluştuğu zaman bu description alanında bu text yer alır.
  const content =
    "Tasklar otomatik oluşturulur ve ilişkili kişiler o taska assign edilir. \n\n`Review talebinde bulunan  ➝ Review yapacak olan`\n\nTalepte bulunan kişi bulunduğu taskın altında her bir review için subtask açar. \n\nÖrnek: Pazartesi ➝ https://gitlab.90pixel.net/...\n\nBu subtaska taskı açtığı gün ve açılmış mrın linkini ekler ve review'ı yapacak olan kişiyi o subtaska assign eder. Bu taskın status'u açıldığı zaman todo olmalıdır. Review'ı yapan kişi review tamamlandıktan sonra taskı completed'a çeker ve böylece review işlemi tamamlanmış olur.";

  const taskRequest: Promise<IList> = await fetcher({
    url: `/folder/${process.env.FOLDER_ID}/list`,
    requestOptions: {
      method: 'POST',
      body: JSON.stringify({
        name: listName,
        content
      })
    }
  });
  return taskRequest;
};

export default createList;
