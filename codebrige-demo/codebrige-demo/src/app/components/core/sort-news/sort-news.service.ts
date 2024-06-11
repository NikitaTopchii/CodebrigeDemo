import { Injectable } from '@angular/core';
import { NewsBlock } from '../../shared/types/news-block';

@Injectable({
  providedIn: 'root'
})
export class SortNewsService {

  constructor() { }

  private sortNews(news: NewsBlock[]): NewsBlock[] {
    return news.sort((a, b) => {

      if (b.titleHighlightAmount !== a.titleHighlightAmount) {
        return b.titleHighlightAmount - a.titleHighlightAmount;
      }

      return b.descriptionHighlightAmount - a.descriptionHighlightAmount;
    });
  }

  updateHighlightAmount(index: number, titleHighlightAmount: number, descriptionHighlightAmount: number, news: NewsBlock[]): NewsBlock[] {
    news[index].titleHighlightAmount = titleHighlightAmount;
    news[index].descriptionHighlightAmount = descriptionHighlightAmount;
    return this.sortNews(news);
  }

  checkHighlightedText(currentNewsBlockData: NewsBlock, search: string): any {
    const amountTitleHighlightedText = this.countOccurrences(currentNewsBlockData.title.toLowerCase(), search.toLowerCase())

    const amountOfHighlightTextDescription = this.countOccurrences(currentNewsBlockData.shortDescription.toLowerCase(), search.toLowerCase())

    return {amountOfHighlightTextTitle: amountTitleHighlightedText, amountOfHighlightTextDescription: amountOfHighlightTextDescription}
  }

  countOccurrences(mainString: string, subStrings: string) {
    let count = 0;
    subStrings.split(' ').forEach(subString => {
      const occurrences = mainString.toLowerCase().split(subString.toLowerCase()).length - 1;
      count += occurrences;
    });
    return count;
  }
}
