import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chiffre: number = 0;
  nombreTabForm!: FormGroup;
  tableForm!: FormGroup;
  tableau: number = 0;



  ngOnInit(): void {
    this.tableForm = new FormGroup({
      chiffre: new FormControl(''),
    });
    this.nombreTabForm = new FormGroup({
      tableau: new FormControl(''),
    });

  }

}




  


