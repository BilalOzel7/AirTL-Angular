import { Component, OnInit } from '@angular/core';
import { SurucuDetail } from 'src/app/models/surucuDetail';
import { SurucuService } from 'src/app/services/surucu.service';

@Component({
  selector: 'app-surucu',
  templateUrl: './surucu.component.html',
  styleUrls: ['./surucu.component.css']
})
export class SurucuComponent implements OnInit {
  surucuDetails:SurucuDetail[]=[]
  constructor(private surucuService:SurucuService) { }

  ngOnInit() {
    this.Details();
  }

  Details() {
    this.surucuService.surucuDetails().subscribe(response=>{
      this.surucuDetails=response.data
    })
  }
}
