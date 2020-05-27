


import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaderResponse } from '@angular/common/http';
import { UserModel } from '../Models/User.Model';

import { Observable } from 'rxjs';

@Injectable()
export class UpdateService{

  id:number;
 userPage:any;
 constructor(private myHttp:HttpClient){
   this.userPage=[];  
  
 }
 setCurrentId(id){
    this.id=id;
  }
  getCurrentId(){
   return  this.id;
  }


//  editUser(id): Observable<{}>
//   {
//   const url2 = `https://localhost:44334/api/UpdatePage?userId=+id`;
//   return this.myHttp.get<UserModel[]>(url2);
//   }


editUser(usersId:any):Boolean
{
   // this.dummy = "shiva";
   console.log('in service',usersId);
this.myHttp.get("https://localhost:44334/api/UpdatePage?userId="+usersId).subscribe(res=>{
        console.log(res);
    })
 
return true;

 
}














 
}