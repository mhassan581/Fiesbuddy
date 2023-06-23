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
  result: Array<iCompList>;
}

export interface iFileType {
  _id: string;
  title: string;
  result: Array<iFileType>;
}
