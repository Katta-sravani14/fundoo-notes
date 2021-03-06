import { Injectable } from '@angular/core';
import { ServicesService } from '../http/services.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: ServicesService) { }

  loginService(data : any){
    return this.http.post('user/login',data,"");
  }

  registerService(data : any){
    return this.http.post('user/userSignUp',data,"");
  }

  forgotService(data : any){
    return this.http.post('user/reset',data,"");
  }

  resetService(data : any,token : any){
    return this.http.post('user/reset-password',data,token)
  }

  createNote(data: any , id: any){
    return this.http.post('notes/addNotes',data,id);

  }

  getNoteList(id:any){
    return this.http.get('notes/getNotesList',id)
  }
}