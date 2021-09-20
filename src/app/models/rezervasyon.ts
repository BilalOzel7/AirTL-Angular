export interface Rezervasyon{
    rezervasyonId:number;
    uyeId:number;
    acenteId:number;
    kayitTarih:Date;
    fiyat:number;
    ekstrasızFiyat:number;
    tlFiyat:number;
    ekstrasızTlFiyat:number;
    doviz:string;
    euroKur:number;
    dolarkur:number;
    indirimliFiyat:number;
    rota:string;
    status:boolean;
}