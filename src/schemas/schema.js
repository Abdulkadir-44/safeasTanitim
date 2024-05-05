import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const basicSchema = yup.object().shape({
    nameSurname : yup.string("Geçerli İsim-Soyisim giriniz !").required("Zorunlu Alan") ,
    phone : yup.string().matches(phoneRegExp,"Lütfen geçerli bir telefon numarası girin !").min(10,"Telefon numarası 10 haneli olmalı !( '0' olmadan birleşik yazın)").max(10,"Telefon numarası 10 haneli olmalı( '0' olmadan birleşik yazın)").required("Zorunlu Alan"),
    email : yup.string().email("Lütfen geçerli formatta email adresi yazın !").required("Zorunlu Alan"),
    clock : yup.string().required("Zorunlu Alan"),
    note : yup.string()
})