import { Product } from './../product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  };

  constructor(private productService: ProductService,
    private router: Router,
    private snackBar: MatSnackBar) {     }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado!");
      this.router.navigate(['/products']);
    });    
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
