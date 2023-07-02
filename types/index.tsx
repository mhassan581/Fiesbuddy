export interface IUser {
  _id: string;
  email: string;
  userName: string;
  emailVerified: boolean;
  userRole: string;
}

export interface LoginUserParams {
  email: string;
  password: string;
}

export interface iCompList {
  _id: string;
  title: string;
  file: string;
  result: Array<iCompList>;
}

export interface iFileType {
  _id: string;
  title: string;
  result: Array<iFileType>;
}

export interface iEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  result: Array<iFileType>;
}

export interface iAnnouncement {
  _id: string;
  title: string;
  time: string;
  category: string;
  result: Array<iAnnouncement>;
}
