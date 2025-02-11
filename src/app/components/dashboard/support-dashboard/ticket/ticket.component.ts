import { Component, input, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  isDetailsVisible = signal<boolean>(false);

  onToggleDetails() {
    this.isDetailsVisible.set(!this.isDetailsVisible());
  }
}
