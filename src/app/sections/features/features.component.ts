import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-features',
    imports: [NgFor],
    templateUrl: './features.component.html',
})

export class FeaturesComponent {
    @Input() items: any[] = [];   
    @Input() subtitle = '';
    @Input() parrafo = '';
}
