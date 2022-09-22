import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  propLegal = "qualquer"
  propMessageP = "hello world"

  constructor() { }

  ngOnInit(): void {
  }
  
  fazerAlgo(): void {
    console.log("Fazendo algo")
  }

}
