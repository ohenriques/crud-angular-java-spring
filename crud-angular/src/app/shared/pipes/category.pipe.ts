import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  // o que recebe value: string) e retorna o  string
  transform(value: string): string {
    switch (value) {
      case 'Front-end': return 'code';
      case 'Back-end': return 'computer';
      case 'Mobile': return 'smartphone';
      case 'Devops': return 'settings_suggest';
    }
    return 'remove';
  }

}
