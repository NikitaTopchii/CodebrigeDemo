import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateConvertorService {

  constructor(private datePipe: DatePipe) {
  }

  getFormattedDate(rowDate: string): string {
    const date = new Date(rowDate)
    const day = date.getDate();
    const suffix = this.getDateSuffix(day);
    const month = this.datePipe.transform(date, 'MMMM'); // Full month name
    const year = this.datePipe.transform(date, 'yyyy'); // Full year

    return `${month} ${day}${suffix}, ${year}`;
  }

  getDateSuffix(day: number): string {
    if (day > 3 && day < 21) return 'th'; // Handle 11th, 12th, 13th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
}
