import { Component, input } from '@angular/core';

@Component({
  selector: 'app-status-dasboard',
  imports: [],
  templateUrl: './status-dasboard.component.html',
  styleUrl: './status-dasboard.component.css',
})
export class StatusDasboardComponent {
  currentStatus = input<string>();
}
