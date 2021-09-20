import { Component, OnInit } from '@angular/core';
import { Rezervasyon } from 'src/app/models/rezervasyon';
import { RezervasyonService } from 'src/app/services/rezervasyon.service';

@Component({
  selector: 'app-rezervasyon-false',
  templateUrl: './rezervasyon-false.component.html',
  styleUrls: ['./rezervasyon-false.component.css']
})
export class RezervasyonFalseComponent implements OnInit {
Rezervasyon:Rezervasyon[]=[]
  constructor(private rezervasyonService:RezervasyonService) { }

  ngOnInit() {
    this.rezervasyon();
  }
  rezervasyon() {
    this.rezervasyonService.rezervasyonFalse().subscribe(response=>{
      this.Rezervasyon=response.data
    })
  }
}
