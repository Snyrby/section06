import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
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
export class ControlComponent implements AfterContentInit {
  // this does the same thing as the host property in the component. This is considered discouraged.
  // Within in the decorator, you can select the actual host property you want to change
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('click');
  // }
  label = input.required<string>();

  // contentchild is how you get access to the ref object of projected content
  // @ContentChild("input") private readonly control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private readonly control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  private readonly el = inject(ElementRef);

  constructor() {
    // this will run no matter what whenever any change happens across the entire application
    afterRender(() => {
      console.log('afterRender');
    });

    // this will run no matter what whenever any next change happens across the entire application
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  // this will run after the content has been rendered like ngcontent
  ngAfterContentInit() {
    console.log('After content initialization');
  }
  onClick() {
    console.log('click');
    console.log(this.el);
    console.log(this.control().nativeElement);
  }
}
