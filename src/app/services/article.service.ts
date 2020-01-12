import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "../models/article";
import { AdminArticle } from "../models/AdminArticle";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  headers = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  public addArticle(article: AdminArticle) {
    return this.http
      .post<AdminArticle>(
        "http://localhost:8080/article/add",
        JSON.stringify(article),
        {
          headers: this.headers
        }
      )
      .subscribe();
  }

  public getArticles(): Observable<AdminArticle[]> {
    return this.http.get<AdminArticle[]>("http://localhost:8080/article/all");
  }
}
