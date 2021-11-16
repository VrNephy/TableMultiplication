import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tables-multiplication',
  templateUrl: './tables-multiplication.component.html',
  styleUrls: ['./tables-multiplication.component.css']
})
export class TablesMultiplicationComponent implements OnInit {

  @Input() tableau!: number;

  nbTables =Array();
  isSubmitted = false;
  badChiffre = false;

  nombreTabForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.nombreTabForm = new FormGroup({
      tableau: new FormControl(''),
    });
  }

  

  get formControls() { return this.nombreTabForm.controls; }

  tab2(x: number): Array<number> {
    return new Array(x);
  }
  submitForm2() {
    this.isSubmitted = true;
    this.nbTables = [];
    for (let i = 1; i <= this.tableau; i++) {
      this.nbTables.push(i);
    }
    console.table(this.nbTables);
    if (this.nombreTabForm.value.tableau != '' && this.nombreTabForm.value.tableau != null) {
      this.tableau = this.nombreTabForm.get('tableau')?.value;

    }
    else {
      this.tableau = 10;
      for (let i = 1; i <= this.tableau; i++) {
        for (let y = 1; y <= 10; y++) {
          let multitab = i * y;
          console.log(i + " X " + y + " = " + multitab)
        }
      }
    }
  }

}


