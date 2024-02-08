import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public baseUrl = '/api/Event'
  constructor(private http: HttpClient) { }

  getEventsFromServer():Observable <Event[]> {
    return this.http.get<Event[]>('/api/Event')
  }
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`/api/Event/${id}`)
  }

  addEvent(event: Event): Observable<Event[]> {
    // this.productsList.push(product)
    return this.http.post<Event[]>('/api/Event', event)
  }
}
