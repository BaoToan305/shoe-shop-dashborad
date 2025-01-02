import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading-services/loading.service';
import { NgIf, AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  constructor(private loadingService: LoadingService) {}

  // Getter để lấy Observable loading$
  get isLoading$() {
    return this.loadingService.loading$;
  }

  fetchData() {
    this.loadingService.show(); // Hiển thị loading
    setTimeout(() => {
      this.loadingService.hide(); // Ẩn loading sau khi hoàn tất xử lý
    }, 2000); // 2 giây mô phỏng việc tải dữ liệu
  }
}
