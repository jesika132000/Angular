import { Component, ElementRef, HostListener, inject, input, } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-hero-chem3d',
  imports: [NgFor],
  styleUrls: ['./hero-chem3d.component.css'],
  templateUrl: './hero-chem3d.component.html',
})

export class HeroChem3DComponent {
  items = input<any[] | null>(null);


  private el = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  onMove(ev: MouseEvent) {
    const box = this.el.nativeElement.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    const dx = (ev.clientX - cx) / (box.width / 2);
    const dy = (ev.clientY - cy) / (box.height / 2);

    const rx = (dy * -20).toFixed(2) + 'deg';
    const ry = (dx * 30).toFixed(2) + 'deg';
    this.el.nativeElement.style.setProperty('--rx', rx);
    this.el.nativeElement.style.setProperty('--ry', ry);
  }
}
