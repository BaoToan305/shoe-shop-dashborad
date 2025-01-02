import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Lưu token vào LocalStorage hoặc SessionStorage
  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  // Lấy token từ LocalStorage
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Xóa token khi đăng xuất
  logout(): void {
    localStorage.removeItem('auth_token');
  }
}
