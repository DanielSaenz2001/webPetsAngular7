import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { EmpresaComponent } from './view/empresa/empresa.component';
import { ProductosComponent } from './view/productos/productos.component';
import { EspecialesComponent } from './view/especiales/especiales.component';
import { ContactoComponent } from './view/contacto/contacto.component';
import { ProductoAddComponent } from './view/productos/producto-add/producto-add.component';
import { ProductoListComponent } from './view/productos/producto-list/producto-list.component';
import { FormsModule } from '../../node_modules/@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresaComponent,
    ProductosComponent,
    EspecialesComponent,
    ContactoComponent,
    ProductoAddComponent,
    ProductoListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //conecxion a firebase
    AngularFireAuthModule, //usar autientificacion de direvase
    AngularFireDatabaseModule  //para usar la base de datos de firebase :V
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
