import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';


interface Gender {
    type: number;
    value: string;
}
@Component({
    selector: 'app-float',
    templateUrl: './floatlabeldemo.component.html',
    providers: [MessageService, ConfirmationService],
})
export class FloatLabelDemoComponent implements OnInit {
    @Input() division!: any[];
    @Input() position!: any[];
    @Input() dataOneUser!: any;
    @Input() isRePair!: boolean
    @Input() isCreate!: boolean

    constructor(
        private UserSvr: UserService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private route: Router,
        private router: ActivatedRoute,
    ) { }

    dataLocal!: any;
    countries: any[] = [];
    selectedGender!: any[];
    CreateDay!: any[];
    filteredCountries: any[] = [];
    address: string = '';
    isDelete: boolean = true;
    data!: any[];
    param!: any;

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

    user: any = new FormGroup({
        Name: new FormControl({ value: null, disabled: false }, [
            Validators.required,
        ]),
        Birthday: new FormControl({ value: null, disabled: false }, [
            Validators.required,
        ]),
        Phone: new FormControl({ value: null, disabled: false }, [
            Validators.required,
        ]),
        Address: new FormControl({ value: null, disabled: false }, [
            Validators.required,
        ]),
        Email: new FormControl({ value: null, disabled: false }, [
            Validators.required,
        ]),
        Position: new FormControl({ value: null, disabled: false }, [
            Validators.required,
        ]),
        Division: new FormControl({ value: null, disabled: false }, [
            Validators.required,
        ]),
        Gender: new FormControl({ value: null, disabled: false }, [
            Validators.required,
        ]),
        Password: new FormControl({ value: null, disabled: false }, [
            Validators.required,
        ])
    });

    ngOnInit() {

        this.getParam()
        this.getData()
        

        // local
        const local = localStorage.getItem('key');
        if (local) this.dataLocal = JSON.parse(local);
        if (this.dataLocal?.userLocal?.id == this.param?.id) {
            this.isDelete = false
        }


    }

    getData() {
        this.UserSvr.getOneUser(this.param?.id).subscribe(res => {
            this.user.setValue({
                Name: res[0].Name,
                Birthday: this.UserSvr.formatDate(res[0].Birdthday),
                Phone: res[0].Phone,
                Address: res[0].Address,
                Email: res[0].Email,
                Position: res[0].UserTypeName,
                Division: res[0].PositionName,
                Gender: res[0].Gender = 0? "Nam": "Nữ",
                Password : res[0].Password
            });
        })
        
    }



    handleUpdate() {
        const userValue = this.user.value;
        const isEmpty = Object.values(userValue).every(value => !value);
        const address = this.address === '' ? null : this.address;

        if (isEmpty && !address) {
            const result = { content: 'Không thể cập nhật', severity: 'warn' };
            this.showError(result);
            this.isRePair = true;
            this.user.disable();
            return;
        }

        const update = {
            Name: userValue.Name,
            Birdthday: this.UserSvr.formatDateString(userValue.Birthday) == "19700101" ? null : this.UserSvr.formatDateString(userValue.Birthday),
            Email: userValue.Email,
            Address: address,
            Phone: userValue.Phone,
            Gender: userValue.Gender?.type || null,
            UserTypeId: userValue.Position,
            PositionTypeId: userValue.Division,
        };
        this.UserSvr.updateUser(this.dataOneUser[0]?.id, update).subscribe(
            (res) => {
                const result = { content: 'Cập Nhật thành công', severity: 'success' };
                this.showError(result);
                this.isRePair = true;
                this.user.disable();
            },
            (error) => {
                if (error.status == 500) {

                    const result = { content: 'Không thể cập nhật', severity: 'warn' };
                    this.showError(result);
                    this.isRePair = true;
                    this.user.disable();
                }
            }
        );
    }


    getDataAddress(address: string) {
        this.address = address;
    }
    showError(e: any) {
        this.messageService.add({
            detail: e.content,
            severity: e.severity,
        });
    }
    // create
    handleCreate() {
        const create = this.user.value
        const date = new Date().toLocaleDateString("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" })
        const isEmpty = Object.values(create).some(value => !value);
        const address = this.address === '' ? null : this.address;
        if (isEmpty && !address) {
            const result = { content: 'Không thể thêm tài khoản ! vui lòng điền đủ thông tin', severity: 'warn' };
            this.showError(result);
            return;
        }
        const data = {
            Name: create.Name,
            Birdthday: this.UserSvr.formatDateString(create.Birthday) == "19700101" ? null : this.UserSvr.formatDateString(create.Birthday),
            Email: create.Email,
            Password: create.Password,
            Address: address,
            Phone: create.Phone,
            Gender: create.Gender?.type || 0,
            UserTypeId: create.Position,
            PositionTypeId: create.Division,
            IdUser: 0,
            CreateBy: this.dataLocal?.userLocal?.id,
            createDay: this.UserSvr.formatDateString(date)
        };
        this.UserSvr.PostUser(data).subscribe((res) => {

        },
            (error) => {
                console.log(error)
                if (error.status == 500) {
                    const result = { content: 'Không thể thêm tài khoản ', severity: 'warn' };
                    this.showError(result);
                    return;
                }
            })
        const result = { content: 'Tạo tài khoản thành công', severity: 'success' };
        this.showError(result);

    }

    getParam() {
        this.router.queryParams.subscribe(res => {
            if (res) {
                this.param = res
            }
            console.log(this.param)
        })
    }


    confirm1() {
        this.confirmationService.confirm({
            message: `Are you sure that you want to delete User : ${this.dataOneUser[0].Name}?`,
            accept: () => {
                this.UserSvr.deletedUser(this.dataOneUser[0]?.id).subscribe()
                const result = { content: 'Xóa thành công thành công', severity: 'success' };
                this.showError(result);
                this.route.navigate(['/home/tk'])
            },

        });
    }

}
