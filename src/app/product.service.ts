import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Figurine Asterix', price: 29.99, imageUrl: 'assets/asterix.png' },
    { id: 2, name: 'Figurine Obelix', price: 34.99, imageUrl: 'assets/obelix.png' },
    { id: 3, name: 'Figurine Panoramix', price: 27.99, imageUrl: 'assets/asterix.png' },
    { id: 4, name: 'Figurine Assurancetourix', price: 25.99, imageUrl: 'assets/obelix.png' },
    { id: 5, name: 'Figurine Abraracourcix', price: 32.99, imageUrl: 'assets/asterix.png' },
    { id: 6, name: 'Figurine Idéfix', price: 19.99, imageUrl: 'assets/obelix.png' },
    { id: 7, name: 'Figurine Falbala', price: 24.99, imageUrl: 'assets/asterix.png' },
    { id: 8, name: 'Figurine Bonemine', price: 28.99, imageUrl: 'assets/obelix.png' },
    { id: 9, name: 'Figurine Ordralfabétix', price: 26.99, imageUrl: 'assets/asterix.png' },
    { id: 10, name: 'Figurine Cétautomatix', price: 30.99, imageUrl: 'assets/obelix.png' },
    { id: 11, name: 'Figurine Jules César', price: 39.99, imageUrl: 'assets/asterix.png' },
    { id: 12, name: 'Figurine Brutus', price: 22.99, imageUrl: 'assets/obelix.png' },
    { id: 13, name: 'Figurine Caius Bonus', price: 26.49, imageUrl: 'assets/asterix.png' },
    { id: 14, name: 'Figurine Caligula Minus', price: 23.99, imageUrl: 'assets/obelix.png' },
    { id: 15, name: 'Figurine Goudurix', price: 29.49, imageUrl: 'assets/asterix.png' },
    { id: 16, name: 'Figurine Pepe', price: 20.99, imageUrl: 'assets/obelix.png' },
    { id: 17, name: 'Figurine Rahazade', price: 33.99, imageUrl: 'assets/asterix.png' },
    { id: 18, name: 'Figurine Numérobis', price: 31.99, imageUrl: 'assets/obelix.png' },
    { id: 19, name: 'Figurine Tullius Détritus', price: 28.49, imageUrl: 'assets/asterix.png' },
    { id: 20, name: 'Figurine Ekonomikrisis', price: 27.49, imageUrl: 'assets/obelix.png' },
    { id: 21, name: 'Figurine Zérozérosix', price: 35.99, imageUrl: 'assets/asterix.png' },
    { id: 22, name: 'Figurine Triple Patte', price: 26.99, imageUrl: 'assets/obelix.png' }
  ];
  

  constructor() {}

  getProducts(): Observable<any[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<any> {
    const product = this.products.find(p => p.id === id);
    return of(product); 
  }
}
