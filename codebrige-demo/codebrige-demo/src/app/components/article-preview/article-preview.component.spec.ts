import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreviewComponent } from './article-preview.component';

describe('NewsBlockComponent', () => {
  let component: ArticlePreviewComponent;
  let fixture: ComponentFixture<ArticlePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePreviewComponent]
    });
    fixture = TestBed.createComponent(ArticlePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
