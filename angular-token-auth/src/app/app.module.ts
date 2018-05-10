import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angular2TokenService } from 'angular2-token';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    AppRoutingModule,
    MaterializeModule,
    //RouterModule,
    MaterializeModule
  ],
  providers: [ Angular2TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
