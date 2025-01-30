import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { StatusDasboardComponent } from './components/dashboard/status-dasboard/status-dasboard.component';
import { TrafficDashboardComponent } from './components/dashboard/traffic-dashboard/traffic-dashboard.component';
import { SupportDashboardComponent } from './components/dashboard/support-dashboard/support-dashboard.component';
import { DashboardItemComponent } from "./components/dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    StatusDasboardComponent,
    TrafficDashboardComponent,
    SupportDashboardComponent,
    DashboardItemComponent
],
})
export class AppComponent {
  currentStatus = 'online';
}
