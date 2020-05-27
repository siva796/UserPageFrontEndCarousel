import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.css']
})
export class UpdateMessageComponent implements OnInit {

  constructor( private myRoutes:Router) { }
  Back(){
    this.myRoutes.navigate(['/userData']);
  }

  ngOnInit(): void {
  }

}
