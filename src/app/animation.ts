import { trigger, style, transition, query, group, animate, keyframes, animation } from '@angular/animations';

export const slideInAnimation =
trigger('slideInAnimation', [
    transition('* <=> *', [
        style({position : 'relative'}),
        query(':enter, :leave', [
            style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
            }),
        ], { optional: true }),
        query(':enter', [
            style({left: '-100%'})
        ], {optional: true}),
        group([
            query(':leave', [
                animate('0.6s ease-out', style({left: '100%'}))
            ], { optional: true }),
            query(':enter',
                animate('1s ease-out', style({left: '0%'}) ),
              { optional: true }
         )]),
    ]),

]);
// ================================================================
//      another example
// ============================================================

export const translateAnimation =
trigger('translateAnimation', [
    transition('* <=> *', [
        style({position : 'relative'}),
        query(':enter, :leave', [
            style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
            }),
        ], { optional: true }),
        group([
            query(':enter', [
                style({transform: 'translateY(100%)'}),
            ], { optional: true }),
            query(':leave',
        group([
            animate('1s ease-in-out', style({transform: 'translateY(10%)'})),
            ]),
            { optional: true }
         )

        ]),
    ]),

]);

export let fadeIn = animation([
    style({
        opacity: '0'
    }), animate(1000, style({
        opacity: '1'
    }))
]);

export let fadeOut = animation([
animate('$duration', style({opacity: 0}))
]);



















