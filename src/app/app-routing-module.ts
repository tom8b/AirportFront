import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { FlightsSearcherComponent } from "./components/flights-searcher/flights-searcher.component";
import { RegisterComponent } from "./components/register/register.component";
import { ConnectionListComponent } from "./components/connection-list/connection-list.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { SingleConnectionComponent } from "./components/single-connection/single-connection.component";
import { ReservationListComponent } from "./components/reservation-list/reservation-list.component";
import { AddArticleComponent } from "./components/add-article/add-article.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "search", component: FlightsSearcherComponent },
  { path: "connections", component: ConnectionListComponent },
  { path: "logout", component: LogoutComponent },
  { path: "connections/:id", component: SingleConnectionComponent },
  { path: "reservations", component: ReservationListComponent },
  { path: "addArticle", component: AddArticleComponent },
  { path: "info", component: ArticleListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  LogoutComponent,
  ReservationListComponent,
  SingleConnectionComponent,
  HomeComponent,
  AddArticleComponent,
  ArticleListComponent
];
