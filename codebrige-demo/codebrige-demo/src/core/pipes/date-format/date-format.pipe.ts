import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) return '';

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', value);
      return '';
    }

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    const day = date.getDate();
    const daySuffix = this.getDaySuffix(day);

    const [month, dayWithComma, year] = formattedDate.split(' ');
    const dayNumber = dayWithComma.replace(',', '');

    return `${month} ${dayNumber}${daySuffix}, ${year}`;
  }

  private getDaySuffix(day: number): string {
    if (day % 10 === 1 && day !== 11) return 'st';
    if (day % 10 === 2 && day !== 12) return 'nd';
    if (day % 10 === 3 && day !== 13) return 'rd';
    return 'th';
  }
}
