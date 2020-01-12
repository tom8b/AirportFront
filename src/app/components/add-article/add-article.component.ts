import { Component, OnInit } from "@angular/core";
import { AdminArticle } from "src/app/models/AdminArticle";
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.css"]
})
export class AddArticleComponent implements OnInit {
  author: string;
  title: string;
  description: string;
  content: string;
  article: AdminArticle;
  constructor(public articleService: ArticleService) {}

  ngOnInit() {}

  addArticle() {
    this.article = new Article();
    this.article.content = this.content;
    this.article.author = sessionStorage.getItem("userLogin");
    this.article.title = this.title;
    this.article.description = this.description;

    this.articleService.addArticle(this.article);
  }
}
