import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MessageService } from 'primeng/api';
interface dataReset {
    password: string;
    email: string;
}
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
    ],
    providers: [MessageService],
})
export class LoginComponent implements OnInit {
    constructor(
        private UserSvr: UserService,
        private route: Router,
        private messageService: MessageService
    ) { }

    LoginData: any;
    checkEmail: boolean = false;
    checkPass: boolean = false;
    dataLogin: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    ngOnInit(): void {
        if (this.dataLogin.valid) {
            this.UserSvr.login(this.dataLogin).subscribe((res) => {
                this.LoginData = res;
            });
        }
    }
    onSubmitLogin(): void {
        if (this.dataLogin.valid) {
            this.UserSvr.login(this.dataLogin.value).subscribe(
                (res) => {
                    this.LoginData = res;
                    const userLocal = {id : res[0].idUser,name: res[0].name}
                    localStorage.setItem('key', JSON.stringify({userLocal}))
                    this.route.navigate(['/home'], {queryParams: {id:res[0].idUser}});
                },
                (error) => {
                    if (error.status == 401) {
                        this.showError(), this.dataLogin.reset();
                    }
                }
            );
        } else {
            if (this.dataLogin.value.password?.length === 0) {
                this.checkPass = true;
            }
            if (this.dataLogin.value.email?.length === 0) {
                this.checkEmail = true;
            }
        }
    }
    showError() {
        this.messageService.add({
            detail: 'Thông tin khoản hoặc mật khẩu không chính xác ',
        });
    }
}
