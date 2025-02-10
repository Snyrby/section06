import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-status-dasboard',
  imports: [],
  templateUrl: './status-dasboard.component.html',
  styleUrl: './status-dasboard.component.css',
})
//OnInit forces the component to use ngOnInit to avoid typos
export class StatusDasboardComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private readonly destroyRef = inject(DestroyRef);
  // private interval?: ReturnType<typeof setInterval>;

  constructor() {
    // reading signals inside of a constructor will only execute once. To get around this, you can use the effect function
    effect((onCleanup) => {
      console.log(this.currentStatus());
      onCleanup(() => {
        // this will clean up and code before the effect is ran again
        console.log("cleanup");
      });
    });
  }

  // ngOnInit runs when the component has been initialized and allows for inputs to be available
  ngOnInit() {
    console.log('onInit');
    // this.interval = setInterval(() => {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }
}
