import { Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  msg: string;
  constructor(private snackBar: MatSnackBar) { 
    this.msg = '';
  }

  showMessage(msg: string): void {
    this.msg = msg;
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',      
    })
  }
}