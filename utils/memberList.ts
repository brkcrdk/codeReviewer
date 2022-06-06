const memberList = process.env.MEMBERS?.split(',').map((member: string) =>
  member.trim()
);

export default memberList;
