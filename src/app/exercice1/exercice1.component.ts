import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  image: string =
    'https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg';
  libAlt: string = 'image Google';
  libButton: string = 'Tester';

  public clickButton() {
    console.log('Tester');
  }
}
