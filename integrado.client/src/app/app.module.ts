import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//routes
import { AppRoutingModule } from './app-routing.module';
//services
import { BranchService } from './services/branch.service';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MoneyComponent } from './components/money/money.component';
import { BranchComponent } from './components/branch/branch.component';
import { BranchDetailComponent } from './components/branch-detail/branch-detail.component';
import { BranchEditComponent } from './components/branch-edit/branch-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoneyComponent,
    BranchComponent,
    BranchDetailComponent,
    BranchEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BranchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
