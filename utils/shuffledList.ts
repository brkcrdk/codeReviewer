import { memberList } from './memberData';

const shuffledList = (): {
  shuffeledMembers: string[];
  shuffleText: string;
} => {
  if (memberList) {
    const shuffeledMembers = memberList.sort(() => 0.5 - Math.random());

    let shuffleText = '';

    shuffeledMembers.forEach((member: string, index) => {
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
