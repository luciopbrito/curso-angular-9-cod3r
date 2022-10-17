import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  idproduct: number | null;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.product = { name: '', price: 0 };
    this.idproduct = null;
  }

  ngOnInit(): void {
    this.idproduct = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.readById(this.idproduct).subscribe(product => {
      this.product = product;
    })
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

  deleteProduct(): void {
    this.productService.delete(this.idproduct).subscribe(() => {
      this.productService.showMessage("Produto deletado com sucesso");
      this.router.navigate(["/products"]);
    });
  }
}
