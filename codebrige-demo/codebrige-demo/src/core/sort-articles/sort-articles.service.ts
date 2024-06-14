import { Injectable } from '@angular/core';
import { Article } from '../../shared/types/article';
import {HighlightTextAmount} from "../../shared/types/highlightTextAmount";

@Injectable({
  providedIn: 'root'
})
export class SortArticlesService {

  constructor() { }

  private sortArticle(articles: Article[]): Article[] {
    return articles.sort((a, b) => {

      if (b.titleHighlightAmount !== a.titleHighlightAmount) {
        return b.titleHighlightAmount - a.titleHighlightAmount;
      }

      return b.summaryHighlightAmount - a.summaryHighlightAmount;
    });
  }

  updateHighlightTextAmount(index: number, titleHighlightAmount: number, summaryHighlightAmount: number, news: Article[]): Article[] {
    news[index].titleHighlightAmount = titleHighlightAmount;
    news[index].summaryHighlightAmount = summaryHighlightAmount;
    return this.sortArticle(news);
  }

  getHighlightedText(currentNewsBlockData: Article, search: string): HighlightTextAmount {
    const amountTitleHighlightedText = this.countOccurrences(currentNewsBlockData.title.toLowerCase(), search.toLowerCase())

    const amountSummaryHighlightText = this.countOccurrences(currentNewsBlockData.summary.toLowerCase(), search.toLowerCase())

    return { amountTitleHighlightedText, amountSummaryHighlightText }
  }

  countOccurrences(mainString: string, subStrings: string) {
    return subStrings.split(' ').reduce((count, subString) => {
      const occurrences = (mainString.toLowerCase().match(new RegExp(subString.toLowerCase(), 'g')) || []).length;
      return count + occurrences;
    }, 0);
  }
}
