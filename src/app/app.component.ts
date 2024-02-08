import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet,EventsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson6';

  constructor(private router:Router) {
   
    
  }
  navToEvents() {
    this.router.navigate(['/events-list'])
  }
}
