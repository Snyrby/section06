import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-support-dashboard',
  imports: [NewTicketComponent],
  templateUrl: './support-dashboard.component.html',
  styleUrl: './support-dashboard.component.css',
})
export class SupportDashboardComponent {
  tickets: Ticket[] = [];
  onAdd(ticketData: { title: string; ticketText: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.ticketText,
      id: Math.random().toString(),
      status: 'open',
    };
    this.tickets.push(ticket);
  }
}
