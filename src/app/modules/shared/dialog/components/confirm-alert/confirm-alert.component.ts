import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material';
import {ConfirmAlertData} from '../../models/confirm-alert-data';

@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.css']
})
export class ConfirmAlertComponent implements OnInit {

  message: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: ConfirmAlertData,
    private snackBarRef: MatSnackBarRef<any>
    ) {
  }

  ngOnInit() {
    this.message = this.data.message ? this.data.message : '';
  }

  clickOk() {
    this.snackBarRef.dismissWithAction();
  }

  clickCancel() {
    this.snackBarRef.dismiss();
  }

}
