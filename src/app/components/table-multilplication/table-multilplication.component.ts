import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-multilplication',
  templateUrl: './table-multilplication.component.html',
  styleUrls: ['./table-multilplication.component.css']
})
export class TableMultilplicationComponent implements OnInit {

  @Input() chiffre!: number;

  isSubmitted = false;
  badChiffre = false;
  
  

  @Output() leChiffre = new EventEmitter<string>();

  tableForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.tableForm = new FormGroup({
      tableau: new FormControl(''),

    });
  }

  get formControls() { return this.tableForm.controls; }


  compteur(x: number): Array<number> {
    return new Array(x);
  }
  submitForm1() {
    this.isSubmitted = true;
    this.chiffre = this.tableForm.get('chiffre')?.value;
    console.log(this.chiffre);
    if (this.tableForm.value.chiffre != '' && this.tableForm.value.chiffre != null) {
      this.chiffre = this.tableForm.get('chiffre')?.value;
    }
    else {
      this.chiffre = 1;
    }
  }
}
