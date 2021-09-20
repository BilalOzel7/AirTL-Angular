import { Component, OnInit } from '@angular/core';
import { Rezervasyon } from 'src/app/models/rezervasyon';
import { RezervasyonService } from 'src/app/services/rezervasyon.service';

@Component({
  selector: 'app-rezervasyon-true',
  templateUrl: './rezervasyon-true.component.html',
  styleUrls: ['./rezervasyon-true.component.css']
})
export class RezervasyonTrueComponent implements OnInit {
Rezervasyon:Rezervasyon[]=[]
  constructor(private rezervasyonService:RezervasyonService) { }

  ngOnInit() {
    this.rezervasyon();
  }
  rezervasyon() {
    this.rezervasyonService.rezervasyonTrue().subscribe(response=>{
      this.Rezervasyon=response.data
    })
  }
}
