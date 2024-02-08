import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../event.model';
@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  public event!: Event
  public eventId!: number
  constructor(private route: ActivatedRoute, private _eventService: EventsService) { }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.eventId = param['id'];
      this._eventService.getEventById(this.eventId).subscribe({
        next: (res) => {
          this.event = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
  }
}
