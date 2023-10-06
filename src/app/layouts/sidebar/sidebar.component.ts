import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  model: any[] = []
  sidebarVisible: boolean = true

  constructor() {

  }
  ngOnInit(): void {
    this.model = [
      {
        lable: 'Home',
        items: [
          {
            text: 'Trang chủ',
            icon: 'pi pi-home',
            path: '/'
          }
        ]
      },
      {
        lable: 'Tài Khoản',
        items: [
          {
            text: 'Thông tin',
            icon: 'pi pi-user',
            path: ['tk']
          },

        ]
      },
      {
        lable: 'Chấm công',
        items: [
          {
            text: 'Lịch sử chấm công',
            icon: 'pi pi-bookmark',
            path: ['ct']
          },

        ]
      },
      {
        lable: 'Phân tích',
        items: [
          {
            text: 'Biểu đồ Pie',
            icon: 'pi pi-chart-pie',
            path: ['analyst/pie']
          },
          {
            text: 'Biểu đồ Line',
            icon: 'pi pi-home',
            path:['analyst/line']
          },
        ]
      },
      {
        lable: 'Hệ thống',
        items: [
          {
            text: 'Cài đặt',
            icon: 'pi pi-cog',
            path:['system']
          }
        ]
      },
      {
        lable: '',
        items: [
          {
            text: 'Đăng xuất',
            icon: 'pi pi-cog',
            path: ['logout']
          }
        ]
      }
    ]
  }
}
