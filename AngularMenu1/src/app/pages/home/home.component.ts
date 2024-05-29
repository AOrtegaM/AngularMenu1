import { Component, OnInit } from '@angular/core';
import { ApiService, GastosView } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  gastosView: GastosView[] = [];
  errMessage?: string;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.llenarGastosView();               
  }

  llenarGastosView() {
    this.apiService.getGastosView().subscribe(data => {
      this.gastosView = data;
      this.gastosView.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    },
      err => {        
        this.errMessage = err.status + " : " + err.statusText;
      })
  } 

}


