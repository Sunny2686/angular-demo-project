import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe ({
  name: 'shorten',
})

export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number) {
        if (value.length > limit) {
        return  value.substr(0, limit) + '.....';
        }
        return value;
    }
}

