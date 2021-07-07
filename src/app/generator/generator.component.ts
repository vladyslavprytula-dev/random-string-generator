import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css'],
})
export class GeneratorComponent {
  string: string = '';
  activ: boolean = true;
  getEvery3000ms() {
    if (this.activ) {
      this.activ = false;
      interval(3000).subscribe(() => (this.string = this.getRandomString()));
    }
  }
  getRandomString() {
    let text: string = '';
    const symbols: string = 'abcdefghijklmnopqrstuvwxyz1234567890';
    for (let i = 0; i < 5; i++) {
      text += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return text;
  }
}
