import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighlightSearchPipe } from '../core/pipes/highlight-search/highlight-search.pipe';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { TruncatePipe } from '../core/pipes/truncate/truncate.pipe';
import {DateFormatPipe} from "../core/pipes/date-format/date-format.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticlePreviewComponent,
    ArticlePageComponent,
    HighlightSearchPipe,
    TruncatePipe
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        DateFormatPipe
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
