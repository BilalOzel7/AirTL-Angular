import { Component, OnInit } from '@angular/core';
import { RezervasyonDetail } from 'src/app/models/rezervasyonDetail';
import { RezervasyonService } from 'src/app/services/rezervasyon.service';

@Component({
  selector: 'app-rezervasyon',
  templateUrl: './rezervasyon.component.html',
  styleUrls: ['./rezervasyon.component.css']
})
export class RezervasyonComponent implements OnInit {
rezervasyonDetail:RezervasyonDetail[]= [];
  constructor(private rezervasyonService:RezervasyonService) { }

  ngOnInit() {
    this.Details();
  }
  Details() {
    this.rezervasyonService.rezervasyonDetails().subscribe(response=>{
      this.rezervasyonDetail=response.data
    })
  }
}
