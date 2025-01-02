import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_URL } from '../../utils/constants';
import { AuthService } from '../auth-config/auth.service';
import { BaseResponse } from '../../models/reponse/base-response';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  private createHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // Lấy token từ AuthService
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`, // Thêm token nếu có
    });
  }

  // Hàm GET, sử dụng headers chung
  get<T>(endpoint: string, params: any = {}): Observable<BaseResponse<T>> {
    const headers = this.createHeaders(); // Lấy headers với token
    return this.http
      .get<BaseResponse<T>>(`${BASE_URL}/${endpoint}`, {
        headers,
        params,
      })
      .pipe(catchError(this.handleError));
  }

  // Hàm POST, cũng sử dụng headers chung
  post<T>(endpoint: string, data: any): Observable<BaseResponse<T>> {
    const headers = this.createHeaders(); // Lấy headers với token
    return this.http
      .post<BaseResponse<T>>(`${BASE_URL}/${endpoint}`, data, {
        headers,
      })
      .pipe(catchError(this.handleError));
  }

  // Common error handler
  private handleError(error: any): Observable<never> {
    // Log error to the console or send to logging infrastructure
    console.error('An error occurred', error);
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
