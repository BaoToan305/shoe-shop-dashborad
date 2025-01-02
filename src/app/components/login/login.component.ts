import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-config/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/reponse/user';
import { ApiService } from '../../services/api-config/api.service';
import { UserResponse } from '../../models/reponse/user-response';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { LoadingService } from '../../services/loading-services/loading.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService,
    private loadingService: LoadingService
  ) {}

  onLogin(): void {
    const loginData = {
      user_name: this.username,
      user_password: btoa(this.password),
    };
    this.loadingService.show();
    this.apiService.post<User>(`api/Oauth/login`, loginData).subscribe({
      next: (response: UserResponse) => {
        const token = response.data.jwt_token;
        if (token) {
          this.authService.saveToken(token);

          this.router.navigate(['/home']);
          console.log('Đăng thành công');
          this.loadingService.hide();
        }
      },
      error: (error) => {
        console.error('Đăng nhập thất baị:', error);
        this.loadingService.hide();
      },
    });
  }
}
