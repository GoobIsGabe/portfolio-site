import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparator'
})
export class CommaSeparatorPipe implements PipeTransform {

  transform(technologies: string[]): string {
    if (technologies && technologies.length > 0) {
      return technologies.join(', '); // Use ', ' to add a space after each comma
    }
    return '';
  }

}
