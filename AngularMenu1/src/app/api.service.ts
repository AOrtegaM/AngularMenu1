import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'YOUR_API_KEY';
  baseUrl = ''; // `http://localhost:5228`

  constructor(private httpClient: HttpClient) { }  

  public getPersonas():Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + `/api/personas`);    
  }

  public addPersona(persona: Persona): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(persona);    
    return this.httpClient.post<any>(this.baseUrl + `/api/personas`, body, { 'headers': headers });    
  }

  public getGastos(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + `/api/gastos`);    
  }

  public addGasto(gasto: Gasto): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(gasto);    
    return this.httpClient.post<any>(this.baseUrl + `/api/gastos`, body, { 'headers': headers });
  }  

  public getGastosView(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + `/api/gastosview`);
  }   

  public getBalanceView(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + `/api/balanceview`);
  }

  public getDeudaView(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + `/api/deudaview`);
  }

}

export class Persona {
  constructor(
    public Id: number,
    public Nombre: string,
    public Apellidos: string,
  ) { }

}

export class PersonaV {
  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
  ) { }

}

export class Gasto {
  constructor(
    public id: number,
    public idPersona: number,
    public fecha: Date,
    public descripcion: string,
    public importe: number,
  ) { }

}

export class GastosView {
  constructor(
    public id: number,
    public idPersona: number,
    public nombre: string,
    public apellidos: string,
    public fecha: Date,
    public descripcion: string,
    public importe: number,   
  ) { }
}

export class BalanceView {
  constructor(
    public id: number,     
    public nombre: string,
    public apellidos: string,
    public importe: number,
  ) { }
}

export class DeudaView {
  constructor(    
    public nombreDeudor: string,
    public nombreAcreedor: string,
    public importe: number,
  ) { }
}

