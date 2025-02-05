import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-dasboard',
  imports: [],
  templateUrl: './status-dasboard.component.html',
  styleUrl: './status-dasboard.component.css',
})
//OnInit forces the component to use ngOnInit to avoid typos
export class StatusDasboardComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: ReturnType<typeof setInterval>;

  // ngOnInit runs when the component has been initialized and allows for inputs to be available
  ngOnInit() {
    console.log('onInit');
    // this.interval = setInterval(() => {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }
}
