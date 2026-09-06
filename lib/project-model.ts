export type Breakpoint='desktop'|'tablet'|'mobile';
export type ComponentKind='section'|'navbar'|'hero'|'text'|'button'|'image'|'features'|'bento'|'card'|'stats'|'testimonials'|'pricing'|'faq'|'cta'|'footer'|'divider';
export type Responsive<T>={base:T;tablet?:T;mobile?:T};
export type Effect={glass?:{blur:number;saturation:number;opacity:number;tint:string};gradient?:{from:string;to:string;angle:number};noise?:number;glow?:number};
export type Animation={entrance?:string;hover?:string;continuous?:string;duration:number;delay:number;easing:string;scroll?:{start:number;end:number;y:number;scale:number;rotate:number;opacity:number}};
export type ComponentNode={id:string;kind:ComponentKind;name:string;content?:string;children:ComponentNode[];styles:Record<string,Responsive<string|number>>;effects:Effect;animation:Animation;props:Record<string,string>};
export type ProjectDocument={id:string;name:string;version:number;activePageId:string;pages:{id:string;name:string;root:ComponentNode[]}[];tokens:{colors:Record<string,string>;type:Record<string,string>;spacing:Record<string,string>;radius:Record<string,string>;shadows:Record<string,string>};assets:{id:string;name:string;kind:string;url:string}[]};
