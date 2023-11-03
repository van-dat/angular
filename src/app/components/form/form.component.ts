import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from 'src/app/services/position.service';
import { UserTypeService } from 'src/app/services/user-type.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
    dataOneUser!:any
    division!: any[]
    position!: any[];
    isCreate:boolean = true
   

constructor(private positionSvr: PositionService, private useTypeSrv: UserTypeService, private route : ActivatedRoute, private UserSvr : UserService) {}
    ngOnInit() {
        this.positionSvr.getPosition().subscribe(res => {
            this.division = res
          })
          this.useTypeSrv?.getUserType().subscribe(res => {
            this.position = res
          })
    }

}
