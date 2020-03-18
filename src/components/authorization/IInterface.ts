export interface User extends Account {
  firstName: string;
  lastName: string;
  email: string;
}

export interface Account {
  login: string;
  password: string;
}