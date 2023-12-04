import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coordinator-first-screen',
  templateUrl: './coordinator-first-screen.component.html',
  styleUrls: ['./coordinator-first-screen.component.css'],
})
export class CoordinatorFirstScreenComponent {
  public buttonText = 'Clique aqui';
  public isToggled = false;
  public showHidden = false;
  @Output() someEvent = new EventEmitter<void>();

  public welcomeMessage: string = 'Seja bem-vindo(a) Leonardo';

  emitEvent(): void {
    this.someEvent.emit();
  }

  public toggle(): void {
    this.isToggled = !this.isToggled;
  }

  public showHiddenElement(): void {
    this.showHidden = true;
  }
}
