import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TitleComponent } from './components/title/title.component';
import { DetailComponent } from './pages/detail/detail.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BadgeListComponent } from './components/badge-list/badge-list.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, HomeComponent, NotFoundComponent, TitleComponent, DetailComponent, BadgeComponent, BadgeListComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
