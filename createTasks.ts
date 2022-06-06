import { shuffeledList, promptLoop, listNameBuilder } from 'utils';
import { memberData, createList } from 'api';

const { shuffeledMembers, shuffleText } = shuffeledList();

const conditionText = `Liste bu: ${shuffleText}
Eğer listeyi beğenmezsen listeyi yenilemek için rs yaz. Eğer listeyi beğendiysen E yaz ve tasklar oluşsun :)`;

async function run() {
  for await (const answer of promptLoop(conditionText)) {
    if (answer === 'E') {
      // const startingDay = Date.now();
      // const endDay = new Date(startingDay + 4 * 24 * 60 * 60 * 1000);
      // console.log({ startingDay: new Date(startingDay), endDay });

      // console.log('proceed with this list', shuffeledMembers);
      const listName = listNameBuilder();

      const taskRequest = await createList({ listName });

      // console.log(taskRequest);

      // console.log('fetching teamMembers started');
      // const teamList = await memberData();
      // console.log(teamList);
      // console.log('fetching teamMembers finished');

      break;
    }
    break;
  }
}

run();
