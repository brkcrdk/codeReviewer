export interface IUser {
  id: number;
  username: string;
  email: string;
  color: string;
  profilePicture: string | null;
  initials: string;
  role: number;
  custom_role: null;
  last_active: string;
  date_joined: string;
  date_invited: string;
}

export interface IMember {
  user: IUser;
  invited_by?: IUser;
}

export interface IList {
  id: string;
  name: string;
  deleted: boolean;
  orderindex: number;
  content: string;
  folder: {
    id: string;
    name: string;
    hidden: boolean;
    access: boolean;
  };
}

export interface ITask {
  tasks: [
    {
      id: string;
      name: string;
    }
  ];
}

export interface IFolder {
  lists: [
    {
      id: string;
    }
  ];
}
