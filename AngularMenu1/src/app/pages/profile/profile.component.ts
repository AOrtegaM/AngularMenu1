import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, PersonaV, Gasto } from '../../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  personas: PersonaV[] = [];
  gasto = new Gasto(0, 0, new Date(), '', 0);
  errMessage?: string;
  formGasto: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.formGasto = this.fb.group({
      idPersona: [''],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      importe: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.llenarPersonas();
  }

  llenarPersonas() {
    this.apiService.getPersonas().subscribe(data => {
      this.personas = data;      
    }, err => {      
      this.errMessage = err.status + " : " + err.statusText;
    })
  }

  sendValues() {    
    this.gasto = new Gasto(0, this.formGasto.value.idPersona, this.formGasto.value.fecha, this.formGasto.value.descripcion, this.formGasto.value.importe);
    this.addGasto();
    this.formGasto.reset();
  }

  addGasto() {
    this.apiService.addGasto(this.gasto)
      .subscribe(data => {        
      }, err => {        
        this.errMessage = err.status + " : " + err.statusText;
      })
  }

}
