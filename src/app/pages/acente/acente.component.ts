import { Component, OnInit } from '@angular/core';
import { AcenteDetail } from 'src/app/models/acenteDetail';
import { AcenteService } from 'src/app/services/acente.service';

@Component({
  selector: 'app-acente',
  templateUrl: './acente.component.html',
  styleUrls: ['./acente.component.css']
})
export class AcenteComponent implements OnInit {
  acenteDetails:AcenteDetail[]=[]
  constructor(private acenteService: AcenteService) { }

  ngOnInit() {

    this.Details();
  }

  Details() {
    this.acenteService.acenteDetails().subscribe(response=>{
      this.acenteDetails=response.data
    })
  }
}
