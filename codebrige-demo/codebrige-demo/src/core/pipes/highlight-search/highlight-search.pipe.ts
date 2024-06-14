import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch',
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }

    const searchWords = args.split(' ').map((word:string) => word.trim()).filter((word:string) => word);

    const regex = new RegExp(`(${searchWords.join('|')})`, 'gi');
    return value.replace(regex, `<span class='highlight'>$1</span>`);
  }

}
