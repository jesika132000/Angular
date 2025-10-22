import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../shared/layout/page-layout.component';
import { HeroChem3DComponent } from '../../sections/hero-chem3d/hero-chem3d.component';
import { FeaturesComponent } from '../../sections/features/features.component';
import { MagicBentoComponent } from '../../sections/features/magic-bento.component';
import { FeatureItem } from '../../sections/features/feature.model';

@Component({
    standalone: true,
    selector: 'app-home-page',
    imports: [PageLayoutComponent, HeroChem3DComponent, FeaturesComponent, MagicBentoComponent],
    templateUrl: './home-page.component.html',
})

export class HomePageComponent {

    heroChem3d = [
        {
            desc: 'Una landing de práctica en Angular con un héroe 3D hecho solo con CSS y un toque de TypeScript.',
        }
    ];

    features = [
        { title: 'Análisis Rápido', desc: 'Procesos optimizados con Angular.' },
        { title: 'Visual 3D', desc: 'Moléculas animadas en CSS 3D.' },
        { title: 'Contenido Desacoplado', desc: 'JSON/MD para textos e imágenes.' },
    ];

    features2: FeatureItem[] = [
    {
      id: 'organic',
      title: 'Organic Chemistry',
      description: 'The study of carbon-containing compounds…',
      image: '/image/organic.webp',
      accent: 'from-emerald-400 to-cyan-500',
      colSpan: 1, rowSpan: 2,
    },
    {
      id: 'inorganic',
      title: 'Inorganic Chemistry',
      description: 'Properties and behavior of inorganic compounds.',
      image: '/image/Inorganic.webp',
      accent: 'from-amber-400 to-pink-500',
      colSpan: 1, rowSpan: 2,
    },
    {
      id: 'physical',
      title: 'Physical Chemistry',
      description: 'Fundamental physical principles behind chemical systems.',
      image: '/image/organic.webp',
      accent: 'from-sky-400 to-indigo-500',
      colSpan: 1, rowSpan: 3,
    },
    {
      id: 'analytical',
      title: 'Analytical Chemistry',
      description: 'Separation, identification, quantification of compounds.',
      image: '/image/Inorganic.webp',
      accent: 'from-fuchsia-400 to-violet-500',
      colSpan: 2, rowSpan: 2,
    },
  ];

    

}
