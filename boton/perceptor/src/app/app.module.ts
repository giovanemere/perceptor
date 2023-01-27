import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // cargamos el módulo en el array de
    AppRoutingModule,
    ReactiveFormsModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
