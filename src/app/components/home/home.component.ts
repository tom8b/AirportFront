import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  articles: Article[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getArticlesFromNewsApi();
  }

  getArticlesFromNewsApi() {
    this.http
      .get<Article[]>(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=54ba89ab96a34169b33fd6c82ac81032"
      )
      .subscribe(x => {
        this.articles = x["articles"];
      });
  }
}
