import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SoftDeleteService } from '../Services/SoftDeleteService';
import { UserService } from '../Services/User.service';
import { UserModel } from '../Models/User.Model';

@Component({
  selector: 'app-soft-delete',
  templateUrl: './soft-delete.component.html',
  styleUrls: ['./soft-delete.component.css']
})
export class SoftDeleteComponent implements OnInit {
deleteForm:FormGroup;
usersId:any;
isDeleted:any;
submittedButton:any;
deleteOrNot:any;//Delete Message

userUpdateData:UserModel;// used for activated Route
userPage:any;//used for Get 
userData:UserModel;


  constructor(private formBuilder: FormBuilder,private myRoutes: Router,private userService:UserService,private softdeleteService:SoftDeleteService,myactiveRoute:ActivatedRoute) {
    
    this.userData=new UserModel();
    if(myactiveRoute.snapshot.paramMap.get('userData'))
    {
      this.userUpdateData=JSON.parse(myactiveRoute.snapshot.paramMap.get('userData'));
      console.log(this.userUpdateData);
     //  this.myRouter.navigate(['/paymentcredit',{data:JSON.stringify(this.paymentreg2)}],{ skipLocationChange:true});
    }
  
    this.softdeleteService.getUserDataFromApI().subscribe((data)=>
    {
      this.userPage= data;
      console.log(this.userPage);
    })
    
    
    
    
    this.deleteForm = new FormGroup({
      usersId:new FormControl()
      
    });
   }
   get DeleteData() { return this.deleteForm.controls; }
   SoftDelete() {
    
     //Hide the text box
    this.submittedButton = true;
   if (this.deleteForm.invalid) {
     console.log('Invalid Form');

     return;
   }
   
   if (this.deleteForm.valid) {
    

     this.usersId= this.deleteForm.value.usersId;
     this.softdeleteService.SoftDelete(this.usersId,this.isDeleted);
     this.deleteOrNot="Deleted successfully";
     console.log(this.usersId);

   }
 }
 ResetButton() {
  this.submittedButton = false;
  this.deleteForm.reset();
 }
 Back(){
  this.myRoutes.navigate(['/userData']);
  
 }

//  deleteFunction(){
//   this.alertMessage=1;//shows what data to delete
  
//  }

  ngOnInit() {
    
   
    this.deleteForm = this.formBuilder.group({
      usersId:['', [ Validators.pattern('[0-9]*'),Validators.required]]
    })
  }

}
