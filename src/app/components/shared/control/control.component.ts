import {
  Component,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // The following directive is responsible for using the styles as global
  encapsulation: ViewEncapsulation.None,
  // this will always add a property to the host element meaning every app-control will have the control class. This only applies if encapsulation is disabled
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // this does the same thing as the host property in the component. This is considered discouraged.
  // Within in the decorator, you can select the actual host property you want to change
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('click');
  // }
  label = input.required<string>();
  private readonly el = inject(ElementRef);
  onClick() {
    console.log('click');
    console.log(this.el);
  }
}
