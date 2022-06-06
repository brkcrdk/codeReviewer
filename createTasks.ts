import { shuffeledList, promptLoop, listNameBuilder } from 'utils';
import { memberData, createList } from 'api';

const { shuffeledMembers, shuffleText } = shuffeledList();

const conditionText = `Liste bu: ${shuffleText}
Eğer listeyi beğenmezsen listeyi yenilemek için rs yaz. Eğer listeyi beğendiysen E yaz ve tasklar oluşsun :)`;

async function run() {
  for await (const answer of promptLoop(conditionText)) {
    if (answer === 'E') {
      console.log('list oluşturmaya başlandı');
      const listName = listNameBuilder();
      const { id: listId } = await createList({ listName });
      console.log(`liste ${listName} adıyla oluşturuldu`);

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
