import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  // Giá trị khởi tạo là false để mặc định loading ẩn
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true); // Hiển thị loading
  }

  hide() {
    this.loadingSubject.next(false); // Ẩn loading
  }
}
