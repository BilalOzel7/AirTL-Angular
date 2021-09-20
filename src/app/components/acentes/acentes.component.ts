import { Component, OnInit } from '@angular/core';
import { AcenteDetail } from 'src/app/models/acenteDetail';
import { AcenteService } from 'src/app/services/acente.service';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-acentes',
  templateUrl: './acentes.component.html',
  styleUrls: ['./acentes.component.css']
})
export class AcentesComponent implements OnInit {
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
