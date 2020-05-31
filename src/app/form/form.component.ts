import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form = {
    name: '',
    lName: '',
    contactNumber: '',
    address: '',
    tableIterator: ''
  };
  display: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  SaveForm(){
    console.log(this.form);
    this.display = true;
  }

  refreshPage(){
    window.location.reload();
  }

}
