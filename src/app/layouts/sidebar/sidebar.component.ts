import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  id!:any
  model: any[] = []
  sidebarVisible: boolean = true
  dataLocal!:any
  constructor(private route: Router, private parameter : ActivatedRoute) {
   
  }
  ngOnInit(): void {
    const local = localStorage.getItem('key');
    if (local) this.dataLocal = JSON.parse(local);
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
            text: 'Tài khoản',
            icon: 'pi pi-users',
            path: ['tk']
          },
          {
            text: 'Thông tin tài khoản',
            icon: 'pi pi-user',
            path: ['info'],
            param: this.dataLocal?.userLocal?.id 
          },
          {
            text: 'Tạo tài khoản',
            icon: 'pi pi-user-plus',
            path: ['create'],
           
          }
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
            text: 'Biểu đồ ',
            icon: 'pi pi-chart-pie',
            path: ['analyst']
          },
          {
            text: 'Biểu đồ Line',
            icon: 'pi pi-home',
            path:['line']
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
      },
      // 

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

  handleLayout() {
    const local = localStorage.getItem('key');
    if (local) this.dataLocal = JSON.parse(local);
  }
}
