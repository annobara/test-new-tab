import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-new-tab';

  constructor() {
        setTimeout(() =>  {
            const opened = window.open('https://ib.psbank.ru', '_blank');
            window.location.href = opened ? 'https://ya.ru' : 'https://ib.psbank.ru';
        }, 2000);
    }
}
