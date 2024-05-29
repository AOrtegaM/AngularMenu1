import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, Persona } from '../../api.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})


export class PersonComponent implements OnInit {  

  persona = new Persona(0, "", "");
  errMessage?: string;

  form: FormGroup;

  constructor( private apiService: ApiService, private fb: FormBuilder  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required]
    });
  }

  ngOnInit() { }  

  sendValues() {    
    this.persona = new Persona(0, this.form.value.nombre, this.form.value.apellidos);    
    this.addPersona();    
    this.form.reset();    
  }

  addPersona() {
    this.apiService.addPersona(this.persona)
      .subscribe(data => {         
      },
        err => {          
          this.errMessage = err.status + " : " + err.statusText;
        })
  }

}
