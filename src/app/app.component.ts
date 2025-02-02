import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // 🔥 Important pour le routing
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule], // Ajoute RouterModule ici !
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  goToAbout() {
    console.log('Navigation vers About');
    this.router.navigate(['/about']);
  }
}
