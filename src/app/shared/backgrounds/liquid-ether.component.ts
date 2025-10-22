import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-liquid-bg',
  templateUrl: './liquid-ether.component.html',
  styleUrls: ['./liquid-ether.component.css'],
})
export class LiquidEtherBackgroundComponent {
  // variables CSS que usaremos en el CSS
  @HostBinding('style.--mx') mx = '50%';
  @HostBinding('style.--my') my = '50%';
  @HostBinding('style.--intensity') intensity = '0'; // para “activar” al pasar el cursor

  private raf = 0;
  private tmx = 50; // target x (%)
  private tmy = 50; // target y (%)
  private smx = 50; // smoothed x
  private smy = 50;

  @HostListener('window:pointermove', ['$event'])
  onMove(ev: PointerEvent) {
    const w = window.innerWidth || 1;
    const h = window.innerHeight || 1;
    this.tmx = (ev.clientX / w) * 100;
    this.tmy = (ev.clientY / h) * 100;
    this.intensity = '1';
    this.tick();
  }

  @HostListener('window:pointerleave')
  onLeave() {
    this.intensity = '0';
  }

  // easing suave (inercia)
  private tick() {
    if (this.raf) return;
    const animate = () => {
      this.smx += (this.tmx - this.smx) * 0.12;
      this.smy += (this.tmy - this.smy) * 0.12;
      this.mx = `${this.smx}%`;
      this.my = `${this.smy}%`;
      if (Math.abs(this.tmx - this.smx) > 0.05 || Math.abs(this.tmy - this.smy) > 0.05) {
        this.raf = requestAnimationFrame(animate);
      } else {
        this.raf = 0;
      }
    };
    this.raf = requestAnimationFrame(animate);
  }
}
