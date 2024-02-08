import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
export const routes: Routes = [/*{ path: '', redirectTo: 'events-list', pathMatch: 'full' }*/
{ path: 'events-list', component: EventsListComponent },
{ path: 'events-list/:id', component: EventDetailsComponent },];
