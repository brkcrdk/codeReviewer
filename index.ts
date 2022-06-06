import { shuffeledList, promptLoop, listNameBuilder } from 'utils';
import { memberData, createList } from 'api';

const { shuffeledMembers, shuffleText } = shuffeledList();

const conditionText = `Liste bu: 
${shuffleText}
Eğer listeyi beğenmezsen listeyi yenilemek için rs yaz. Eğer listeyi beğendiysen E yaz ve tasklar oluşsun :)`;

async function run() {
  for await (const answer of promptLoop(conditionText)) {
    if (answer === 'E') {
      // console.log('Liste oluşturulmayamaya başlandı');
      // const listName = listNameBuilder();
      // const { id: listId } = await createList({ listName });
      // console.log(`liste ${listName} adıyla oluşturuldu`);

      console.log('Takım üyelerinin bilgileri toplanıyor.');
      const teamList = await memberData();
      console.log('Takım üyelerinin bilgileri toplandı.');

      console.log('Tasklar oluşturulmaya başlandı.');
      shuffeledMembers.forEach((username, index) => {
        const currentPerson = teamList.find(
          (info) => info.username === username
        );
        let nextPerson;
        if (shuffeledMembers[index + 1]) {
          nextPerson = teamList.find(
            (info) => info.username === shuffeledMembers[index + 1]
          );
        } else {
          nextPerson = teamList.find(
            (info) => info.username === shuffeledMembers[0]
          );
        }

        console.log(
          `${currentPerson?.username} -> ${nextPerson?.username} ikilisi için task oluşturulmaya başlandı.`
        );
        // if (member) {
        //   if (shuffeledMembers[index + 1]) {
        //     console.log('task atacaka')
        //     // shuffleText += `${member} -> ${shuffeledMembers[index + 1]}\n`;
        //   } else {
        //     // shuffleText += `${member} -> ${shuffeledMembers[0]}`;
        //   }
        // }
      });
      console.log('Tasklar başarıyla oluşturuldu.');

      break;
    }
    break;
  }
}

run();
