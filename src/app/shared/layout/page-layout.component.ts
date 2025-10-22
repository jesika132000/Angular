import { Component, input } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../../sections/header/header.component';
import { FooterComponent } from '../../sections/footer/footer.component';
import { LiquidEtherBackgroundComponent } from '../backgrounds/liquid-ether.component';


@Component({
    standalone: true,
    selector: 'app-page-layout',
    imports: [LayoutComponent, HeaderComponent, FooterComponent, LiquidEtherBackgroundComponent],
    templateUrl: './page-layout.component.html',
})

export class PageLayoutComponent {
    headerOnDarkStart = input<boolean>(false);
    solidHeader = input<boolean>(false);
}
