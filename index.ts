import { shuffeledList, listNameBuilder } from 'utils';
import { memberData, createList, createTask, latestTaskList } from 'api';

const createTaskList = async (list: string[]) => {
  const reqTest = await latestTaskList();

  const hasConflict = reqTest.some((val) => list.includes(val));

  if (hasConflict) {
    const { matchList } = shuffeledList();
    createTaskList(matchList);
    console.log('eşleşme yapılıyor..');
  } else {
    console.log('aranan eşleşme bulundu ve liste oluşturulmaya başladı');
    const listName = listNameBuilder();
    const { id: listId } = await createList({ listName });
    console.log(`liste ${listName} adıyla oluşturuldu`);

    console.log('Takım üyelerinin bilgileri toplanıyor.');
    const teamList = await memberData();
    console.log('Takım üyelerinin bilgileri toplandı.');

    console.log('Tasklar oluşturulmaya başlandı.');

    for (let i = 0; i < list.length; i++) {
      /**
       * creator => Merge request talebini oluşturan kişi
       * reviewer => Merge request talebini inceleyecek kişi
       */
      const [creator, reviewer] = list[i].split('->').map((val) => val.trim());

      const creatorId = teamList.find(
        (member) => member.username === creator
      )?.id;
      const reviewerId = teamList.find(
        (member) => member.username === reviewer
      )?.id;

      if (creatorId && reviewerId) {
        await createTask({
          listId,
          taskName: `${creator} -> ${reviewer}`,
          assignees: [creatorId, reviewerId]
        });
        console.log(`${creator} -> ${reviewer} ikilisi için task oluşturuldu.`);
      }
    }

    console.log('Tasklar başarıyla oluşturuldu.');
    return;
  }
};

const { matchList } = shuffeledList();
createTaskList(matchList);
