import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tk',
  templateUrl: './tk.component.html',
})
export class TkComponent implements OnInit {
  userDate: any = []
  constructor(private userSrv: UserService) { }
  ngOnInit(): void {
    this.userSrv.getUser().subscribe(res => {
      if (res.rs === true) {
        this.userDate = res.data.map((item: any) => {
          return {
            id: item.id,
            Name: item.Name,
            MNV: item.MNV,
            Ngay_sinh: item.Ngay_sinh,
            Dia_chi: item.Dia_chi,
            Gioi_tinh: item.Gioi_tinh,
            Chucvu_Code: item.Chucvu.Code,
            Chucvu_Value: item.Chucvu.Value
          }
        })
      }
      console.log(this.userDate)
    });

  }
}
