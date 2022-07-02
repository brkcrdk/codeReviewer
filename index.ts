import { shuffeledList, promptLoop, listNameBuilder } from 'utils';
import { memberData, createList, createTask } from 'api';

const { shuffeledMembers, shuffleText } = shuffeledList();

const conditionText = `Liste bu:
${shuffleText}
Eğer listeyi beğenmezsen listeyi yenilemek için rs yaz. Eğer listeyi beğendiysen E yaz ve tasklar oluşsun :)`;

async function run() {
  for await (const answer of promptLoop(conditionText)) {
    if (answer === 'E') {
      console.log('Liste oluşturulmaya başlandı');
      const listName = listNameBuilder();
      const { id: listId } = await createList({ listName });
      console.log(`liste ${listName} adıyla oluşturuldu`);

      console.log('Takım üyelerinin bilgileri toplanıyor.');
      const teamList = await memberData();
      console.log('Takım üyelerinin bilgileri toplandı.');

      console.log('Tasklar oluşturulmaya başlandı.');

      for (let i = 0; i < shuffeledMembers.length; i++) {
        const currentPerson = shuffeledMembers[i];

        let nextPerson: string;
        if (shuffeledMembers[i + 1]) {
          nextPerson = shuffeledMembers[i + 1];
        } else {
          nextPerson = shuffeledMembers[0];
        }

        console.log({ nextPerson, currentPerson });

        const currentMember = teamList.find(
          (member) => member.username === currentPerson
        );
        const nextMember = teamList.find(
          (member) => member.username === nextPerson
        );

        if (currentMember && nextMember) {
          await createTask({
            listId,
            taskName: `${currentPerson} -> ${nextPerson}`,
            assignees: [currentMember?.id, nextMember?.id]
          });
          console.log(
            `${currentPerson} -> ${nextPerson} ikilisi için task oluşturuldu.`
          );
        }
      }

      console.log('Tasklar başarıyla oluşturuldu.');

      break;
    }
    break;
  }
}

run();
