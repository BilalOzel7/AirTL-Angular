import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SurucuService } from 'src/app/services/surucu.service';

@Component({
  selector: 'app-surucu-add',
  templateUrl: './surucu-add.component.html',
  styleUrls: ['./surucu-add.component.css']
})
export class SurucuAddComponent implements OnInit {
  surucuAddForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private surucuService: SurucuService, private toastrService:ToastrService) { }

  ngOnInit() {
    this.createSurucuAddForm();
  }

  createSurucuAddForm() {
    this.surucuAddForm = this.formBuilder.group({
      acenteId: ['', Validators.required],
      eMail: ['', Validators.required],
      sifre: ['', Validators.required],
      adres: ['', Validators.required],
      surucuAdi: ['', Validators.required],
      plaka: ['', Validators.required],
      telefon: ['', Validators.required],
      sehirId: ['', Validators.required],
      ulkeId: ['', Validators.required],
      notlar: ['', Validators.required],
      faturaAdres: ['', Validators.required],
      ıban: ['', Validators.required],
      tcKimlikNo: ['', Validators.required],
      surucuTip: ['', Validators.required],
      surucuKomisyon: ['', Validators.required],
      vergiDaire: ['', Validators.required],
      vergiDaireNo: ['', Validators.required],
      kredi: ['', Validators.required],
      dilId: ['', Validators.required],
      kayitTarih: ['', Validators.required],
      sozlesme: ['', Validators.required],
      sozlesmeOnayTarih: ['', Validators.required],
     
    });
  }

  add(): any {
    // if (!this.acenteAddForm.valid) {
    //   return this.toastrService.error('Formunuz eksik', 'Dikkat');
    // }

    let surucuModel = Object.assign({}, this.surucuAddForm.value);

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
