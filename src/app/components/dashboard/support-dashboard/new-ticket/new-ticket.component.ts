import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
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

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    this.form().nativeElement.reset();
  }
}
