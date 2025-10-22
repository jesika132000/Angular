import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `
        <footer class="border-t py-10">
            <div class="container mx-auto px-4 text-sm opacity-80">
                © {{year}} QuímicaLab — Todos los derechos reservados.
            </div>
        </footer>
  `
})
export class FooterComponent {
    year = new Date().getFullYear();
}
