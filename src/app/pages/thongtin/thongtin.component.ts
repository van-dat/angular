import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { PositionService } from 'src/app/services/position.service';
import { UserTypeService } from 'src/app/services/user-type.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
})
export class ThongtinComponent implements OnInit {
  data!: any
  division!: any[]
  position!: any[];
  param!:any;
  dataOneUser!: any;
  isRePair:boolean = true



  constructor(private positionSvr: PositionService, private useTypeSrv: UserTypeService, private route : ActivatedRoute, private UserSvr : UserService) {

  }
  ngOnInit(): void {
    this.positionSvr.getPosition().subscribe(res => {
      this.division = res
    })
    this.useTypeSrv?.getUserType().subscribe(res => {
      this.position = res
    })
    this.getParam()
    this.UserSvr.getOneUser(this.param?.id).subscribe((res) => {
      const data = res.map((i: any) => {
          return {
              id: i.IdUser,
              Name: i.Name,
              Address: i.Address,
              Birdthday: this.UserSvr.formatDate(i.Birdthday),
              CreateDay: this.UserSvr.formatDate(i.CreateDay),
              Email: i.Email,
              Gender: i.Gender == 0 ? 'Nam' : 'Nữ',
              Phone: i.Phone,
              PositionName: i.PositionName,
              UserTypeName: i.UserTypeName,
          };
      });
      this.dataOneUser = data;
  });

  }
  getParam(){
    this.route.queryParams.subscribe(res => {
      if(res) {
        this.param = res
      }
    })
   
  }

}
