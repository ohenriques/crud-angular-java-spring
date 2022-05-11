import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  // o que recebe value: string) e retorna o  string
  transform(value: string): string {
    switch (value) {
      case 'front-end': return 'code';
      case 'back-end': return 'computer';
    }
    return 'code';
  }

}
