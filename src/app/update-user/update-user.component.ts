import { Component, OnInit, Input } from '@angular/core';
import { UserUpdate } from '../Models/userUpdate.Model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/User.service';
import { UserModel } from '../Models/User.Model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

updateForm:FormGroup;
submittedButton:any;

usersId:any;

userData:UserModel;
userUpdateData:UserModel;







  constructor(private formBuilder: FormBuilder,private myRoutes: Router,private userService:UserService,myActiveRoute:ActivatedRoute) {
    
    
    this.userData=new UserModel();
    if(myActiveRoute.snapshot.paramMap.get('userData'))
    {
      this.userUpdateData=JSON.parse(myActiveRoute.snapshot.paramMap.get('userData'));
      console.log(this.userUpdateData);
     //  this.myRouter.navigate(['/paymentcredit',{data:JSON.stringify(this.paymentreg2)}],{ skipLocationChange:true});
    }
  
    // this.userService.getUserDataFromApI().subscribe((data)=>
    // {
    //   this.userPage= data;
    //   console.log(this.userPage);
    // })

    this.updateForm = new FormGroup({
      usersId:new FormControl(),
      userName: new FormControl(),
      email: new FormControl()
      

    });

   }

 
   get UpdateData() { return this.updateForm.controls; }
   
   Update() {
    this.submittedButton = true;
   if (this.updateForm.invalid) {
     console.log('Invalid Form');

     return;
   }
   if (this.updateForm.valid) {

  
     this.usersId= this.updateForm.value.usersId;

     this.userData.userName=this.updateForm.value.userName;
     this.userData.email = this.updateForm.value.email;
     
     this.userService.update(this.usersId,this.userData);
     this.myRoutes.navigate(['/updateMessage']);
     
     console.log(this.userData);

   }
 }
 ResetButton() {
  this.submittedButton = false;
  this.updateForm.reset();
 }
 Back(){
  this.myRoutes.navigate(['/userData']);
  
 }

  ngOnInit(){
    this.updateForm = this.formBuilder.group({
      usersId:['', [ Validators.pattern('[0-9]*'),]],
      userName: ['', [ Validators.pattern('^[a-zA-Z]*$'),]],

      email: ['', [ Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    })
  }

}
