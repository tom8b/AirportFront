import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { FlightsSearcherComponent } from "./components/flights-searcher/flights-searcher.component";
import { RegisterComponent } from "./components/register/register.component";
import { ConnectionListComponent } from "./components/connection-list/connection-list.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  { path: "register", component: RegisterComponent },
  { path: "home", component: FlightsSearcherComponent },
  { path: "connections", component: ConnectionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  LoginComponent,
  RegisterComponent
];
