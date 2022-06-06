import { fetcher, memberList } from 'utils';
import { IMember } from 'types';

const memberData = async () => {
  const { teams } = await fetcher({ url: '/team' });
  const members: IMember[] = teams[0].members;

  return members
    .map((member) => member.user)
    .filter((user) => memberList?.includes(user.username));
};

export default memberData;
