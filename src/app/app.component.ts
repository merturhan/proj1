import { Component } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';
import { environment as environmentProd } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.title;
  words = environment.words;
}
