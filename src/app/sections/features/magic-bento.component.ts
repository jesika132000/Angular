import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureItem } from './feature.model';
import { TiltDirective } from '../../shared/ui/tilt.directive';

@Component({
  standalone: true,
  selector: 'app-magic-bento',
  imports: [CommonModule, TiltDirective],
  templateUrl: './magic-bento.component.html',
})
export class MagicBentoComponent {
    @Input() items: FeatureItem[] = [];
    @Input() subtitle?: string;

    spanClass(f: FeatureItem) {
        const cols = Math.min(Math.max(f.colSpan ?? 1, 1), 3);
        const rows = Math.min(Math.max(f.rowSpan ?? 1, 1), 3);
        return `xl:col-span-${cols} xl:row-span-${rows}`; 
    }
}
