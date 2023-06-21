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
