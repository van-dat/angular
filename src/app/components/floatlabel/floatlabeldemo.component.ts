import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

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
    @Input() param!: any
    @Input() isRePair!: boolean

    constructor(
        private UserSvr: UserService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private route : Router
    ) { }

    dataLocal!: any;
    countries: any[] = [];
    selectedGender!: any[];
    CreateDay!: any[];
    filteredCountries: any[] = [];
    user: any;
    address: string = '';
    isDelete: boolean = true

    GenderUser: Gender[] = [
        {
            type: 0,
            value: 'Nam',
        },
        {
            type: 1,
            value: 'Nữ',
        },
    ];

    ngOnInit() {

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
        // local
        const local = localStorage.getItem('key');
        if (local) this.dataLocal = JSON.parse(local);
        if (this.dataLocal?.userLocal?.id == this.param?.id) {
            this.isDelete = false
        }

    }

    //
    handleRepair() {
        this.isRePair = false;
        this.user.enable();
    }
    handleCancel() {
        this.isRePair = true;
        this.user.disable();
    }
    // update
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
        console.log(update)
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
    // delete
    handleDeleted() {
        this.confirm1()

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

    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            accept: () => {
                this.UserSvr.deletedUser(this.dataOneUser[0]?.id).subscribe()
                const result = { content: 'Xóa thành công thành công', severity: 'success' };
                this.showError(result);
                this.route.navigate(['/home/tk'])
            },

        });
    }

}
