export class User {
  user_id: number = 0;
  user_name: string = '';
  user_password: string = '';
  user_email: string = '';
  user_phone: string = '';
  user_role_id: number = 0;
  user_role_name: string = '';
  jwt_token: string = '';
  role: string[] = [];
  constructor(data?: Partial<User>) {
    Object.assign(this, data);
  }
}
