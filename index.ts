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

const countDown = async function f(list: string[]) {
  console.log(list);

  const reqTest = await latestTaskList();

  // const nextNumber = fromNumber - 1;
  const { matchList } = shuffeledList();
  if (!reqTest.includes('Burak Çardak -> Erhan Akyel')) {
    f(matchList);
  } else {
    console.log({ matchList, reqTest });
    return console.log('aranan bulundu');
  }
};

// const newYearCountDown = countDown;
const { matchList } = shuffeledList();
countDown(matchList);

// async function test() {
//   const testString = '';

//   if (testString === '3') {
//     return console.log('tuttu');
//   } else {
//     test();
//   }
//   // const reqTest = await latestTaskList();
//   // console.log({ reqTest });
// }

// // const { matchList } = shuffeledList();
// // console.log({ matchList });
// test();
