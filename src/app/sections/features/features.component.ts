import { Component, input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-features',
    imports: [NgFor],
    templateUrl: './features.component.html',
})

export class FeaturesComponent {
    items = input<any[] | null>(null);
}
