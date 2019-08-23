import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ComponentType} from '@angular/cdk/portal';
import {ConfirmAlertData} from '../models/confirm-alert-data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) {
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {duration: 3000});
  }

  showSnackBarFromComponent(component: ComponentType<any>, data: ConfirmAlertData): Observable<void> {
    const matSnackBarRef = this.snackBar.openFromComponent(component, {data});
    return matSnackBarRef.onAction();
  }
}
