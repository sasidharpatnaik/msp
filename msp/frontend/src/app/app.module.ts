import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { DashbordComponent } from './components/dashbord.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar.component';
import { ListCandidatesComponent } from './components/list-candidates.component';
import { SidebarTestComponent } from './components/sidebar-test.component';
import { DataTablesModule } from 'angular-datatables';
import { AddCandidatesComponent } from './components/add-candidates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashbordComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ListCandidatesComponent,
    SidebarTestComponent,
    AddCandidatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
