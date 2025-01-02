import { User } from './user';
import { BaseResponse } from './base-response';

export class UserResponse implements BaseResponse<User> {
  status: number = 0;
  message: string = '';
  data: User = new User();
  constructor(data?: Partial<UserResponse>) {
    Object.assign(this, data);
  }
}
