import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../event.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit {

  public eventsList: Event[] = []

  constructor(private router: Router,private _eventService: EventsService) { }

  ngOnInit(): void {
    this._eventService.getEventsFromServer().subscribe({
      next: (res) => {
        console.log(res);
        
        this.eventsList = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  showDetails(event: Event) {
    this.router.navigate(['/events-list', event.id])
  }
}

