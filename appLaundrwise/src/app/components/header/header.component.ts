import {Component, Inject, OnInit} from '@angular/core';
import {AuthentificationService} from '../../services';
import {UserModel} from '../../models';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private authServices: AuthentificationService, private  router: Router,
                public dialog: MatDialog) {}
    userForLogin: UserModel = new UserModel();

    ngOnInit() {}

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewComponent, {
            width: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    signIn(userForLogin) {
        if (userForLogin.password && userForLogin.email) {
            this.authServices.signIn(userForLogin).then((data: any) => {
                    console.log(data);
                    localStorage.setItem('token', 'testToken');
                },
                (error) => {
                    console.log(error);
                });
        }
    }
}

@Component({
    selector: 'app-dialog-overview',
    templateUrl: 'dialog-overview.html',
})
export class DialogOverviewComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewComponent>,
        @Inject(MAT_DIALOG_DATA) public data: UserModel) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
