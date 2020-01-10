import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { FlightsSearcherComponent } from "./components/flights-searcher/flights-searcher.component";
import { RegisterComponent } from "./components/register/register.component";
import { ConnectionListComponent } from "./components/connection-list/connection-list.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { ReservationsComponent } from "./components/reservations/reservations.component";
import { SingleConnectionComponent } from "./components/single-connection/single-connection.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  { path: "register", component: RegisterComponent },
  { path: "home", component: FlightsSearcherComponent },
  { path: "connections", component: ConnectionListComponent },
  { path: "logout", component: LogoutComponent },
  { path: "reservations", component: ReservationsComponent },
  { path: "singleConnection/:id", component: SingleConnectionComponent }
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
  ReservationsComponent,
  SingleConnectionComponent
];
