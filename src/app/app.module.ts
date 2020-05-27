import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Services/User.service';
import { SoftDeleteService } from './Services/SoftDeleteService';
import { UserPageComponent } from './user-page/user-page.component';
import { DemoComponent } from './demo/demo.component';
import { CarouselPageComponent } from './carousel-page/carousel-page.component';

 import { MatDatepickerModule}from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateUserComponent } from './update-user/update-user.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { SoftDeleteComponent } from './soft-delete/soft-delete.component';  
import { UpdateService } from './Services/UpdatePageService';

import { UpdateMessageComponent } from './update-message/update-message.component';



//  import {MatNativeDateModule}from '@angular/material/datepicker';

const myRoutes :Route[]=[{path:'userData',component:UserPageComponent},
{path:'demo',component:DemoComponent},
{path:'carousel',component:CarouselPageComponent},
{path:'updatePage',component:UpdateUserComponent},
{path:'userDelete',component:SoftDeleteComponent},
{path:'updateMessage',component:UpdateMessageComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    DemoComponent,
    CarouselPageComponent,
    UpdateUserComponent,
    SoftDeleteComponent,
    UpdateMessageComponent,
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
     MatDatepickerModule,
     MatNativeDateModule,
     NgxPaginationModule,
     Ng2SearchPipeModule,
    
   
    //ToastrModule
  ],
  providers: [UserService,SoftDeleteService,UpdateService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

