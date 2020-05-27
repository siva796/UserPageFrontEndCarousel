import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaderResponse } from '@angular/common/http';
import { UserModel } from '../Models/User.Model';

import { Observable } from 'rxjs';

@Injectable()
export class UserService{
     variable:any;
     result:any;
    userPage:any;
      constructor(private myHttp:HttpClient){
        this.userPage=[];  

      }
      getUserDataFromApI(){
        return this.myHttp.get("https://localhost:44380/api/values");
    
} 
InsertUser(userData:UserModel):boolean{
  this.myHttp.post("https://localhost:44380/api/values",userData).subscribe(res=>{
      console.log(res);
  })
  return true;

  // this.myHttp.post("https://localhost:44333/api/values",user)
  
}


update(usersId:any,userPage:UserModel):Boolean
{
   // this.dummy = "shiva";
   console.log('in service',usersId);
this.myHttp.put("https://localhost:44380/api/Values?userId="+usersId,userPage).subscribe(res=>{
  this.result=res;
      if(this.result=true)
       {
         this.variable="Successfully Updated";
       }
        console.log(res);
    })
 
return true;

 
}
}











// addExamRegister(paymenttype:any,exampaymentRegisters:any):Observable<any>
// {
//    // this.dummy = "shiva";
//    console.log('in service',paymenttype,exampaymentRegisters);
//  return this.myHttp.post("https://localhost:44330/api/ExamRegister"+"?"+"paymenttype="+paymenttype,exampaymentRegisters);
// //  return exampaymentRegisters;

 
// }


// "https://localhost:44334/api/values?usersId=1"


// Update(usersId:any,UserUpdate:any):Observable<any>{
//   this.myHttp.put("https://localhost:44334/api/values"+"?"+"usersId="+usersId,UserUpdate).subscribe(res=>{
//       console.log(res);
//   })
//   return ;
 
// }

// addExamRegister(paymenttype:any,exampaymentRegisters:any):Observable<any>
// {
  
//    console.log('in service',paymenttype,exampaymentRegisters);
//    //return this.myHttp.post("https://localhost:44330/api/ExamRegister"+"?"+"paymenttype="+paymenttype,exampaymentRegisters);
   
//   return this.myHttp.put("https://localhost:44389/api/Examin?paymenttype="+paymenttype,exampaymentRegisters)
 
// }