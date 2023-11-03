import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tk',
  templateUrl: './tk.component.html',
})
export class TkComponent implements OnInit {
  @ViewChild('dt1') dt!: Table;
  userData: any = []
  selectedUser: any = []
  value : any
  label: any = [
    {
      link: 'STT',
      name: 'STT',
      field:'STT'
    },
    {
      link: 'Name',
      name: 'Tên Nhân Viên',
      field:"Name"
    },
    {
      name: 'Địa chỉ',
      field:'Address'
    },
    {
      name: 'Ngày Sinh',
      field:'Birdthday'
    },
    {
      name: 'Giới tính',
      field:'Gender'
    },
    {
      name: 'Số Điện Thoại',
      field:'Phone'
    }, {
      name: 'Email',
      field:'Email'
    },
    {
      name: 'Chức Vụ',
      field:'UserTypeName'
    }, {
      name: 'Phòng Ban',
      field:'PositionName'
    },
    { link:'CreateDay',
      name: 'Ngày Tạo',
      field:'CreateDay'      
    },

  ]
  constructor(private userSrv: UserService, private route : Router) { }
  ngOnInit(): void {
    this.userSrv.getUser().subscribe(res => {
      const data = res.map((i: any, index: any) => {
        return {
          STT: index + 1,
          id:i.IdUser,
          Name: i.Name,
          Address: i.Address,
          Birdthday: this.userSrv.formatDate(i.Birdthday),
          CreateDay:this.userSrv.formatDate(i.CreateDay),
          Email: i.Email,
          Gender: i.Gender == 0 ? 'Nam' : 'Nữ',
          Phone: i.Phone,
          PositionName: i.PositionName,
          UserTypeName: i.UserTypeName,
        }
      });
      this.userData = data
    });

  }
  
  filterGlobal(e:any, field:any ,matchMode: string) {
    let value = (e.target as HTMLInputElement)?.value;
    this.dt.filter(value,field, matchMode);
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  onRowSelect(e:any) {
    this.route.navigate(['/home/info'],{queryParams: {id:this.selectedUser?.id}})
  }
}
