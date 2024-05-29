import { Component, OnInit } from '@angular/core';
import { ApiService, DeudaView } from '../../api.service';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrl: './debt.component.css'
})
export class DebtComponent implements OnInit {
  deudaView: DeudaView[] = [];
  errMessage?: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.llenarDeudaView();

  }

  llenarDeudaView() {
    this.apiService.getDeudaView().subscribe(data => {
      this.deudaView = data;
    }, err => {
      this.errMessage = err.status + " : " + err.statusText;
    })
  }  

}
