import { fetcher, shuffeledList, promptLoop, memberData } from 'utils';

// NOTE: Geçen haftanın listesini çekip; onunla karşılaştırma yaparak
// listeyi geçen haftadan farklı yapmayı deneyebiliiriz

const { shuffeledMembers, shuffleText } = shuffeledList();

const conditionText = `Liste bu: ${shuffleText}
Eğer listeyi beğenmezsen listeyi yenilemek için rs yaz. Eğer listeyi beğendiysen E yaz ve tasklar oluşsun :)`;

async function run() {
  for await (const answer of promptLoop(conditionText)) {
    if (answer === 'E') {
      console.log('proceed with this list', shuffeledMembers);

      console.log('fetching teamMembers started');
      const teamList = await memberData();
      console.log(teamList);
      console.log('fetching teamMembers finished');

      break;
    }
    break;
  }
}

run();

// const getTeams = async () => {
//   const response = await fetch('https://api.clickup.com/api/v2/team', {
//     headers: {
//       Authorization: String(process.env.API_TOKEN),
//       'Content-Type': 'application / json'
//     }
//   });
//   const result = await response.json();
//   return result;
// };

// getTeams()
//   .then((res) =>
//     console.log(
//       res.teams[0].members.find(
//         (val: IMember) => val.user.username === 'Burak Çardak'
//       )
//     )
//   )
//   .catch((err) => console.log(err));
