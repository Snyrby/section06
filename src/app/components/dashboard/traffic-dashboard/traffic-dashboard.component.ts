import { Component } from '@angular/core';
import { DUMMY_TRAFFIC_DATA, maxTraffic } from './dummy-traffic';

@Component({
  selector: 'app-traffic-dashboard',
  imports: [],
  templateUrl: './traffic-dashboard.component.html',
  styleUrl: './traffic-dashboard.component.css'
})
export class TrafficDashboardComponent {
  dummyTrafficData = DUMMY_TRAFFIC_DATA
  maxTraffic = maxTraffic
}
