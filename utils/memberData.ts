import { IMember } from 'types';
import fetcher from './fetcher';

export const memberList = process.env.MEMBERS?.split(',').map(
  (member: string) => member.trim()
);

const memberData = async () => {
  const { teams } = await fetcher({ url: '/team' });
  const members: IMember[] = teams[0].members;

  return members
    .map((member) => member.user)
    .filter((user) => memberList?.includes(user.username));
};

export default memberData;
