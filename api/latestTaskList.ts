import { ITask, IFolder } from 'types';
import { fetcher } from 'utils';
/**
 * Mevcut dosyamızın içindeki en son oluşturulmuş olan task listesini döner
 * Bu liste, yeni bir task listesi oluştururken, eşleştirilmelerde çakışma olmaması için kullanılır.
 */

const taskList = async () => {
  const { lists }: IFolder = await fetcher({
    url: `/folder/${process.env.FOLDER_ID}/list`
  });

  const latestListId = lists[lists.length - 1].id;

  const { tasks }: ITask = await fetcher({
    url: `/list/${latestListId}/task`
  });

  return tasks.map((task) => task.name);
};

export default taskList;
