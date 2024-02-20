import { AesService } from "../services/aes.service";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class utilService {
    constructor(private aes: AesService) {}

    public getFromStore(key: string){
        let keyCode = btoa(key)
        let val = localStorage.getItem(keyCode) || '';
        let resolvedVal = this.aes.decrypt(val)
        return resolvedVal ? JSON.parse(resolvedVal) : ''
    }

    public saveToStore(key: string, val: any){
        let keyCode = btoa(key)
        let valCode = this.aes.encrypt(JSON.stringify(val))
        localStorage.setItem(keyCode, valCode)
    }
}