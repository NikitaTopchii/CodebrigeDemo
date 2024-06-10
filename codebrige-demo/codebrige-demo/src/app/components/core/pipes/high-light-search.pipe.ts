import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch',
})
export class HighLightSearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }

    // Разбиваем строку поиска на отдельные слова
    const searchWords = args.split(' ').map((word:string) => word.trim()).filter((word:string) => word);

    // Создаем регулярное выражение для точного совпадения слов
    const regex = new RegExp(`(${searchWords.join('|')})`, 'gi');
    return value.replace(regex, `<span class='highlight'>$1</span>`);
  }

}
