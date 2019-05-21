export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumer: string;
  kycPass: boolean;
}

export interface UserListView {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  kycPass: boolean;
}
