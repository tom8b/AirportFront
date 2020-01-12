import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { MatMenuModule } from "@angular/material/menu";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FlightsSearcherComponent } from "./components/flights-searcher/flights-searcher.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule, routingComponents } from "./app-routing-module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { HomeComponent } from "./components/home/home.component";
import { ConnectionService } from "./services/connection-service";
import { ConnectionListComponent } from "./components/connection-list/connection-list.component";
import { MatInputModule } from "@angular/material";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatListModule } from "@angular/material/list";
import { ReservationListComponent } from "./components/reservation-list/reservation-list.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ArticleListComponent } from "./components/article-list/article-list.component";
//import { ConnectionListComponent } from './services/connection-list/connection-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainContentComponent,
    FooterComponent,
    FlightsSearcherComponent,
    routingComponents,
    ConnectionListComponent,
    ReservationListComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatListModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent],
  exports: [MatMenuModule, MatProgressSpinnerModule],
  providers: [ConnectionService]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
