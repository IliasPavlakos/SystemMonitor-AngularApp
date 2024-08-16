import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle = '';
  enteredText = '';

  //@Output() add = new EventEmitter();
  add = output<{title: string, text: string}>();

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.enteredTitle = '';
    this.enteredText = '';
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.form().nativeElement)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.form().nativeElement)
  }
}
