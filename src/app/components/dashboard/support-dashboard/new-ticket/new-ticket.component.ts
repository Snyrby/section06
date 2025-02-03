import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
<<<<<<< HEAD
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent],
=======

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent],
>>>>>>> c4009a830215184469e4de863e7502573f085e6b
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
