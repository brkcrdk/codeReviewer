export interface IMember {
  user: {
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
  };
  invited_by?: {
    id: number;
    username: string;
    color: string;
    email: string;
    initials: string;
    profilePicture: string;
  };
}
