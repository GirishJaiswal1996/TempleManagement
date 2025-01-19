import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplemanagmentComponent } from './templemanagment/templemanagment.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TemplemanagmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'TempleManagmentUI';
}
