import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]  
})
export class HomeComponent implements OnInit {
  products : any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
