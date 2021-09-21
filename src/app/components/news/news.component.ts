import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) {}

  newsData: any = [];

  ngOnInit(): void {
    this.newsService.getData().subscribe((data) => {
      console.log(data);
      this.newsData = data.articles;
    })
  }

}
