import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsBlockComponent } from './components/news-block/news-block.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighLightSearchPipe } from './components/core/pipes/high-light-search.pipe';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { TruncatePipe } from './components/core/pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewsBlockComponent,
    ArticlePageComponent,
    HighLightSearchPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
