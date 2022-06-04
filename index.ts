import { IMember } from './types';
import fetcher from './fetcher';
import promptLoop from './promptLoop';

// NOTE: Geçen haftanın listesini çekip; onunla karşılaştırma yaparak
// listeyi geçen haftadan farklı yapmayı deneyebiliiriz

/**
 * Seçeceğimiz üyelerin clickup usernamelerini alıyoruz
 */
const members = [
  'Burak Çardak',
  'Aydoğan Sarı',
  'Hakan Demiral',
  'Yasin Kamış',
  'Erhan Akyel',
  'Baran Dasdemir'
];

// fetcher({
//   url: 'https://api.clickup.com/api/v2/team'
// }).then((resp) => {
//   return resp.teams[0].members.filter((member: IMember) =>
//     members.includes(member.user.username)
//   );
// });

const shuffle = () => {
  return [...members].sort(() => 0.5 - Math.random());
};

const test = shuffle();

const conditionText = `Liste bu: ${JSON.stringify(test, null, 4)} \n
Eğer listeyi beğenmezsen listeyi yenilemek için rs yaz. Eğer listeyi beğendiysen E yaz ve tasklar oluşsun :)`;

// console.log(conditionText);

async function run() {
  for await (const answer of promptLoop(conditionText)) {
    if (answer === 'E') {
      console.log('proceed with this list', test);

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
