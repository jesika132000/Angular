import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[appTilt]', standalone: true })
export class TiltDirective {
    @Input() maxTilt = 10; 
    @Input() ease = 0.12;

    private target: HTMLElement;
    private rx = 0; private ry = 0;
    private trx = 0; private try_ = 0;
    private raf = 0;

    constructor(el: ElementRef, private r: Renderer2) { this.target = el.nativeElement; }

    @HostListener('pointermove', ['$event'])
    onMove(e: PointerEvent) {
        const rect = this.target.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        this.trx = (py - 0.5) * -2 * this.maxTilt;
        this.try_ = (px - 0.5) *  2 * this.maxTilt;
        this.animate();
    }

    @HostListener('pointerleave') onLeave() {
        this.trx = 0; this.try_ = 0; this.animate();
    }

    private animate() {
        if (this.raf) return;
        const step = () => {
            this.rx += (this.trx - this.rx) * this.ease;
            this.ry += (this.try_ - this.ry) * this.ease;
            this.r.setStyle(this.target, '--rx', `${this.rx}deg`);
            this.r.setStyle(this.target, '--ry', `${this.ry}deg`);
            if (Math.abs(this.rx - this.trx) > .1 || Math.abs(this.ry - this.try_) > .1) {
                this.raf = requestAnimationFrame(step);
            } else { this.raf = 0; }
        };
        this.raf = requestAnimationFrame(step);
    }
}
