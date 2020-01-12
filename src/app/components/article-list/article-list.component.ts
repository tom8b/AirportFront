import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { AdminArticle } from "src/app/models/AdminArticle";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  articles: AdminArticle[];
  constructor(public articleService: ArticleService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe(x => {
      this.articles = x;
      console.log("descrrrrrr" + this.articles[0].description);
    });
  }
}
