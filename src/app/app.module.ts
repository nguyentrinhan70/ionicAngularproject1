import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesPage } from './movies/movies.page';
import { FormsModule } from '@angular/forms';
import { MovieDetailPage } from './movie-detail/movie-detail.page';
import { MovieService } from './movie.service';
import { MessageService } from './message.service';
import { MessagesPage } from './messages/messages.page';
import { DashboardPage } from './dashboard/dashboard.page';

@NgModule({
  declarations: [AppComponent,
  MoviesPage,
  MovieDetailPage,
  MessagesPage,
  DashboardPage,
  ],
  entryComponents: [],
  imports: [BrowserModule, 
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    MovieService,
    MessageService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
