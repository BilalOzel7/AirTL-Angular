import { Component, OnInit } from '@angular/core';
import { SurucuDestek } from 'src/app/models/surucu-destek';
import { SurucuService } from 'src/app/services/surucu.service';

@Component({
  selector: 'app-surucu-destek',
  templateUrl: './surucu-destek.component.html',
  styleUrls: ['./surucu-destek.component.css']
})
export class SurucuDestekComponent implements OnInit {
  surucuDestek:SurucuDestek[]=[]
  constructor(private surucuService:SurucuService) { }

  ngOnInit() {
    this.Details();
  }
  Details() {
    this.surucuService.surucuDestekDetails().subscribe(response=>{
      this.surucuDestek=response.data
    })
  }
}
