export type Span = 1 | 2 | 3; 

export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    image: string;     
    alt?: string;
    accent?: string;   
    colSpan?: Span;   
    rowSpan?: Span;    
}
