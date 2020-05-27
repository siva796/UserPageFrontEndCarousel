import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { carousel } from '../Models/CarouselPage';

@Component({
  selector: 'app-carousel-page',
  templateUrl: './carousel-page.component.html',
  styleUrls: ['./carousel-page.component.css']
})

export class CarouselPageComponent implements OnInit {
 
 carouseldata:carousel;
  myForm: FormGroup;
  showData:any;
  minDate = new Date();
  maxDate = new Date(2022, 0, 1);
  VminDate = new Date();
  VmaxDate = new Date(2022, 0, 1);
  
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private myActiveRoute: ActivatedRoute) { 
    this.carouseldata=new carousel();
    this.myForm = new FormGroup({
      Application_name: new FormControl(),
      User_name: new FormControl(),
      Carousel_data: new FormControl(),
      Valid_from: new FormControl(),
      // Valid_to: new FormControl(),
    

    });
  }
  get f() { return this.myForm.controls; }
  showDetails() {
    this.submitted = true;
    if (this.myForm.invalid) {
      console.log('Invalid Form');
      
      return;
    }
    
    if (this.myForm.valid) {

      this.carouseldata.Application_name = this.myForm.value.Application_name;


      this.carouseldata.User_name = this.myForm.value.User_name;

      this.carouseldata.Carousel_data = this.myForm.value.Carousel_data;

      this.carouseldata.Valid_from = this.myForm.value.Valid_from;

      // this.carouseldata.Valid_to = this.myForm.value.Valid_to;
      this.showData=1;    
    }
   
   
  }
  
  onReset() {
    this.submitted = false;
    this.myForm.reset();
    
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      Application_name : ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      User_name : ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      Carousel_data: ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
     
      Valid_from: ['', [Validators.required]]
      // Valid_to: ['', [Validators.required]]
     

    })
  }

}









 
  
 



 


    
    




















































































































