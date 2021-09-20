import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AcenteService } from 'src/app/services/acente.service';

@Component({
  selector: 'app-acentes-add',
  templateUrl: './acentes-add.component.html',
  styleUrls: ['./acentes-add.component.css']
})
export class AcentesAddComponent implements OnInit {
  acenteAddForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private acenteService: AcenteService, private toastrService:ToastrService) { }


  ngOnInit() {
    this.createAcenteAddForm();
  }
  createAcenteAddForm() {
    this.acenteAddForm = this.formBuilder.group({
      acenteAdi: ['', Validators.required],
      eMail: ['', Validators.required],
      sifre: ['', Validators.required],
      adres: ['', Validators.required],
      firmaUnvan: ['', Validators.required],
      yetkili: ['', Validators.required],
      telefon: ['', Validators.required],
      sehirId: ['', Validators.required],
      ulkeId: ['', Validators.required],
      notlar: ['', Validators.required],
      faturaAdres: ['', Validators.required],
      ıban: ['', Validators.required],
      yetkiliTel: ['', Validators.required],
      yetkiliEmail: ['', Validators.required],
      kredi: ['', Validators.required],
     
    });
  }

  add(): any {
    // if (!this.acenteAddForm.valid) {
    //   return this.toastrService.error('Formunuz eksik', 'Dikkat');
    // }

    let acenteModel = Object.assign({}, this.acenteAddForm.value);

    this.acenteService.add(acenteModel).toPromise().then(response => {
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
