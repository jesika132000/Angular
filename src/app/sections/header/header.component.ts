import { Component, input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  solidOnStart = input(false);
  onDarkStart = input(false);
  showThemeToggle = input(true);

  @HostBinding('class.dark') get dark() { return this.onDarkStart(); }

  toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  }
}
