import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent  implements OnInit{
  constructor(){

  }
  @Input() division!: any[];
  @Input() position!: any[];
  user!: any
  address!: any


  GenderUser: any[] = [
    {
      type: 0,
      value: 'Nam',
    },
    {
      type: 1,
      value: 'Nữ',
    },
  ];
  ngOnInit(): void {
    this.user = new FormGroup({
      Name: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      Birthday: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      Phone: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      Address: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      Email: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      Position: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      Division: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      Gender: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
    });
  }
  getDataAddress(address: string) {
    this.address = address;
  }
  handleCreateAcc() {
    console.log('a')
  }
}
