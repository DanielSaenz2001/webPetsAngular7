import { Producto } from '../models/producto';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductoService{
  productosList: AngularFireList<any>;
  selectProducto: Producto= new Producto;
  constructor(private firebase:AngularFireDatabase){
    this.productosList= this.firebase.list('productos');
  }

    //Metodo para listar todos los productos (READ)
  getProductos(){
    return this.productosList=this.firebase.list('productos');
  }
  //Metodo para agregar un producto (CREATE)
  insertProducto(producto:Producto){
     this.productosList.push({
       nombre:  producto.nombre,
       precio:  producto.precio,
       stock:   producto.stock,
       imagen:  producto.imagen,
       total:   producto.total
     })
  }

  //Metodo para Actulizar un producto (Update)
  updateProducto(producto:Producto){
    this.productosList.update(producto.$key,{
      nombre:  producto.nombre,
      precio:  producto.precio,
      stock:   producto.stock,
      imagen:  producto.imagen,
      total:   producto.total
    })
  }
  //Metodo para elminar un produtcot (DElete)
  deleteProducto($key:string){
    this.productosList.remove($key);
  }
}
