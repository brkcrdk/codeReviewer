import memberList from './memberList';

const shuffledList = (): {
  matchList: string[];
} => {
  if (memberList) {
    const shuffeledMembers = memberList.sort(() => 0.5 - Math.random());

    const matchList = shuffeledMembers.map((member: string, index) => {
      if (shuffeledMembers[index + 1]) {
        return `${member} -> ${shuffeledMembers[index + 1]}`;
      } else {
        return `${member} -> ${shuffeledMembers[0]}`;
      }
    });

    return { matchList };
  } else {
    return { matchList: [] };
  }
};

export default shuffledList;
