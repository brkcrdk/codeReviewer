import dotenv from 'dotenv';
dotenv.config();

// const shuffledMembers = () => {
//   if (members) {
//     return [...members].sort(() => 0.5 - Math.random());
//   }
// };

// export const list = shuffledMembers();

// export let listText: string;

// list?.forEach((member, index) => {
//   if (list[index + 1]) {
//     // console.log(`${member} -> ${list[index + 1]}`);
//     listText = `${member} -> ${list[index + 1]}`;
//   } else {
//     // console.log(`${member} -> ${list[0]}`);
//     listText = `${member} -> ${list[0]}`;
//   }
// });

const shuffledList = (): {
  shuffeledMembers: string[];
  shuffleText: string;
} => {
  const members = process.env.MEMBERS?.split(',');
  if (members) {
    const shuffeledMembers = members
      .map((member) => member.trim())
      .sort(() => 0.5 - Math.random());

    let shuffleText = '';

    shuffeledMembers.forEach((member, index) => {
      if (shuffeledMembers[index + 1]) {
        shuffleText += `${member} -> ${shuffeledMembers[index + 1]}\n`;
      } else {
        shuffleText += `${member} -> ${shuffeledMembers[0]}`;
      }
    });

    return { shuffeledMembers, shuffleText };
  } else {
    return { shuffeledMembers: [], shuffleText: '' };
  }
};

export default shuffledList;
