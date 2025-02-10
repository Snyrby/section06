import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  // this directive is used to create a ref around whatever the selector is
  // @ViewChild("form") private form?: ElementRef<HTMLFormElement>;
  private readonly form =
    viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('OnInit');
    console.log(this.form().nativeElement);
  }

  // this lifecycle hook is similar to ngOnInit, but it is called when the dom has loaded
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
    this.form().nativeElement.reset();
  }
}
