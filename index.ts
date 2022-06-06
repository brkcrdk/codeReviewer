import { fetcher, shuffeledList, promptLoop } from 'utils';
import { memberData } from 'api';
import { IList } from 'types';

const { shuffeledMembers, shuffleText } = shuffeledList();

const conditionText = `Liste bu: ${shuffleText}
Eğer listeyi beğenmezsen listeyi yenilemek için rs yaz. Eğer listeyi beğendiysen E yaz ve tasklar oluşsun :)`;

async function run() {
  for await (const answer of promptLoop(conditionText)) {
    if (answer === 'E') {
      console.log('proceed with this list', shuffeledMembers);

      const taskRequest: Promise<IList> = await fetcher({
        url: '/folder/32051017/list',
        requestOptions: {
          method: 'POST',
          body: JSON.stringify({
            name: 'New List Name2',
            content: 'New List Content'
          })
        }
      });

      console.log(taskRequest);

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
