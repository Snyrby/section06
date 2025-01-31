import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-support-dashboard',
  imports: [NewTicketComponent],
  templateUrl: './support-dashboard.component.html',
  styleUrl: './support-dashboard.component.css'
})
export class SupportDashboardComponent {

}
