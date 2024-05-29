import { Component, OnInit } from '@angular/core';
import { ApiService, BalanceView } from '../../api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit {

  balanceView: BalanceView[] = [];
  errMessage?:string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.llenarBalanceView();   

  }  

  llenarBalanceView() {
    this.apiService.getBalanceView().subscribe(data => {
      this.balanceView = data;      
    }, err => {      
      this.errMessage = err.status + " : " + err.statusText;
    })
  }  

}
