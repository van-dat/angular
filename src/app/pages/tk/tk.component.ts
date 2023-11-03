import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { UserService } from 'src/app/services/user.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-tk',
  templateUrl: './tk.component.html',
  providers: [MessageService, ConfirmationService],
})
export class TkComponent implements OnInit {
  @ViewChild('dt1') dt!: Table;
  userData: any = []
  selectedUser: any = []
  value: any
  page: number = 5
  rowsPerPageOptions: number[] = [1, 2, 5, 10, 15]
  label: any = [
    {
      link: 'STT',
      name: 'STT',
      field: 'STT'
    },
    {
      link: 'Name',
      name: 'Tên Nhân Viên',
      field: "Name"
    },
    {
      name: 'Địa chỉ',
      field: 'Address'
    },
    {
      name: 'Ngày Sinh',
      field: 'Birdthday'
    },
    {
      name: 'Giới tính',
      field: 'Gender'
    },
    {
      name: 'Số Điện Thoại',
      field: 'Phone'
    }, {
      name: 'Email',
      field: 'Email'
    },
    {
      name: 'Chức Vụ',
      field: 'UserTypeName'
    }, {
      name: 'Phòng Ban',
      field: 'PositionName'
    },
    {
      link: 'CreateDay',
      name: 'Ngày Tạo',
      field: 'CreateDay'
    },

  ]
  constructor(private userSrv: UserService, private route: Router,  private messageService: MessageService, private confirmationService: ConfirmationService,) { }
  ngOnInit(): void {
    this.getdata(this.page)
  }

  getdata(page: number) {
    this.userSrv.getUserPage(page).subscribe(res => {
      const data = res.map((i: any, index: any) => {
        return {
          STT: index + 1,
          id: i.IdUser,
          Name: i.Name,
          Address: i.Address,
          Birdthday: this.userSrv.formatDate(i.Birdthday),
          CreateDay: this.userSrv.formatDate(i.CreateDay),
          Email: i.Email,
          Gender: i.Gender == 0 ? 'Nam' : 'Nữ',
          Phone: i.Phone,
          PositionName: i.PositionName,
          UserTypeName: i.UserTypeName,
        }
      });
      this.userData = data
      console.log(this.userData)
    });
  }

  filterGlobal(e: any, field: any, matchMode: string) {
    let value = (e.target as HTMLInputElement)?.value;
    this.dt.filter(value, field, matchMode);
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  onRowSelect(e: any) {
    // this.route.navigate(['/home/info'], { queryParams: { id: this.selectedUser?.id } })
  }

  onPageValue(e: any) {
    this.getdata(e?.rows)
    console.log(e.rows)
  }
  editProduct(e: any) {
    this.route.navigate(['/home/info'], { queryParams: { id: e?.id } })
  }
  deleteProduct(e: any) {
    this.confirm1(e)
    console.log(e)
  }

  
  confirm1(e: any) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete User : ${e.Name}?`,
      accept: () => {
        this.userSrv.deletedUser(e?.id).subscribe()
        const result = { content: 'Xóa thành công thành công', severity: 'success' };
        this.showError(result);
        this.route.navigate(['/home/tk'])
      },

    });
  }
  showError(e: any) {
    this.messageService.add({
        detail: e.content,
        severity: e.severity,
    });
}
}
