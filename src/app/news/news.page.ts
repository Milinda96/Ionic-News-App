import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    // this.newsService.getData('live/search', '&q=news+articles&google_domain=google.lk&location=Sri+Lanka&gl=lk&hl=si&output=json').subscribe(data => {
    //   console.log(data);
    //   this.data = data;
    // });

    this.newsService.getData('top-headlines?country=us&category=business').subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  gotoNewSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }
}
