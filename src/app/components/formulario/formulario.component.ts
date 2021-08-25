import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  signupForm: FormGroup;

  constructor(
    private _builder: FormBuilder
  ) {
    this.signupForm = this._builder.group({
      nombre:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required, Validators.email])],
      company:[''],
      telefono:['',Validators.compose([Validators.required])],
      mensaje:['',Validators.compose([Validators.required])]
    })
  }

}
