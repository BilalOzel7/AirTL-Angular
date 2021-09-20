import { Component, OnInit } from '@angular/core';
import { TransferDetail } from 'src/app/models/transferDetail';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
Transfer:TransferDetail[]=[]
  constructor(private transferService: TransferService) { }

  ngOnInit() {
    this.Details();
  }

  Details() {
    this.transferService.transferDetails().subscribe(response=>{
      this.Transfer=response.data
    })
  }
}
