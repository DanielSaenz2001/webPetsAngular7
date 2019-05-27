import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/productos.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';


@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css']
})
export class ProductoAddComponent implements OnInit {

  constructor(public productoService:ProductoService) { }

  ngOnInit() {
  }
  
  onSubmit(productoForm: NgForm){
    this.productoService.insertProducto(productoForm.value);
  }
}
