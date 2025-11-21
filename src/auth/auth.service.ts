import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  registerUser() {
    return {
      message: 'User 1 registered successfully!',
    };
  }
}
