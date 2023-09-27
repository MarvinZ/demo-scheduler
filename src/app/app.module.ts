import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxSchedulerModule } from 'devextreme-angular';
import { AppRoutingModule,  } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';


const routes: Routes = [
  { path: 'scheduler', component: SchedulerComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSchedulerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
