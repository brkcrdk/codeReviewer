import { shuffeledList, promptLoop, listNameBuilder } from 'utils';
import { memberData, createList, createTask, latestTaskList } from 'api';

// const { shuffeledMembers, shuffleText } = shuffeledList();

// const conditionText = `Liste bu:
// ${shuffleText}
// Eğer listeyi beğenmezsen listeyi yenilemek için rs yaz. Eğer listeyi beğendiysen E yaz ve tasklar oluşsun :)`;

// async function run() {
//   for await (const answer of promptLoop(conditionText)) {
//     if (answer === 'E') {
//       // console.log('Liste oluşturulmaya başlandı');
//       // const listName = listNameBuilder();
//       // const { id: listId } = await createList({ listName });
//       // console.log(`liste ${listName} adıyla oluşturuldu`);

//       // console.log('Takım üyelerinin bilgileri toplanıyor.');
//       const teamList = await memberData();
//       // console.log('Takım üyelerinin bilgileri toplandı.');

//       // console.log('Tasklar oluşturulmaya başlandı.');

//       for (let i = 0; i < shuffeledMembers.length; i++) {
//         const currentPerson = shuffeledMembers[i];

//         let nextPerson: string;
//         if (shuffeledMembers[i + 1]) {
//           nextPerson = shuffeledMembers[i + 1];
//         } else {
//           nextPerson = shuffeledMembers[0];
//         }

//         // const currentMember = teamList.find(
//         //   (member) => member.username === currentPerson
//         // );
//         // const nextMember = teamList.find(
//         //   (member) => member.username === nextPerson
//         // );

//         // if (currentMember && nextMember) {
//         //   await createTask({
//         //     listId,
//         //     taskName: `${currentPerson} -> ${nextPerson}`,
//         //     assignees: [currentMember?.id, nextMember?.id]
//         //   });
//         //   console.log(
//         //     `${currentPerson} -> ${nextPerson} ikilisi için task oluşturuldu.`
//         //   );
//         // }
//       }

//       console.log('Tasklar başarıyla oluşturuldu.');

//       break;
//     }
//     break;
//   }
// }

// run();

/**
 * İstediğimiz sonucu verene kadar çalışacak bir recursive function
 * Akış şöyle olmalı:
 * - Bu function içerisinde son listeyi al ve oluşturduğun yeni liste ile karşılaştır
 * - Eğer karşılaştırdığın listede çakışma varsa yeniden liste oluştur ve kendini çağır
 * - Eğer çakışma yoksa, o liste ile taskları oluştur ve functiondan çık.
 */
const countDown = async (list: string[]) => {
  const reqTest = await latestTaskList();

  const hasConflict = reqTest.some((val) => list.includes(val));

  if (hasConflict) {
    const { matchList } = shuffeledList();
    countDown(matchList);
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
          assignees: [creatorId, reviewerId],
          notify_all: false
        });
        console.log(`${creator} -> ${reviewer} ikilisi için task oluşturuldu.`);
      }
    }

    console.log('Tasklar başarıyla oluşturuldu.');
    return;
  }
};

const { matchList } = shuffeledList();
countDown(matchList);
