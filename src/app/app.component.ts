import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,HomepageComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularProject';
}
