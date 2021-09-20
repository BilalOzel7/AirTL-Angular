import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SurucuService } from 'src/app/services/surucu.service';

@Component({
  selector: 'app-surucudestek-add',
  templateUrl: './surucudestek-add.component.html',
  styleUrls: ['./surucudestek-add.component.css']
})
export class SurucudestekAddComponent implements OnInit {
  surucuDestekAddForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private surucuService: SurucuService, private toastrService:ToastrService) { }

  ngOnInit() {
  }

  createSurucuAddForm() {
    this.surucuDestekAddForm = this.formBuilder.group({
      
      konu: ['', Validators.required],
      aciklama: ['', Validators.required],
      surucuId: ['', Validators.required],
    });
  }

  add(): any {
    // if (!this.acenteAddForm.valid) {
    //   return this.toastrService.error('Formunuz eksik', 'Dikkat');
    // }

    let surucuModel = Object.assign({}, this.surucuDestekAddForm.value);

    this.surucuService.add(surucuModel).toPromise().then(response => {
      this.toastrService.success(response.message, 'Başarılı');
    }).catch(response => {
      console.log({error: response.error});
      if (response.error.Errors.length > 0) 
        for (
          let index = 0;
          index < response.error.Errors.length;
          index++
        ) {
          this.toastrService.error(
            response.error.Errors[index].ErrorMessage,
            'Doğrulama Hatası'
          );
        }
      });
  }
}
