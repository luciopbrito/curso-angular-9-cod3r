import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  idproduct: number | null;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.product = { name: "", price: 0 };
    this.idproduct = null;
  }

  ngOnInit(): void {
    this.idproduct = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.readById(this.idproduct).subscribe(product => {
      this.product = product;
    });
  }

  cancel() {
    this.router.navigate(["/products"])
  }

  updateProduct() {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    })
  }

}
