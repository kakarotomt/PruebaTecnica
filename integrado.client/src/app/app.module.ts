import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
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
import { BranchEditComponent } from './components/branch-edit/branch-edit.component';
import { MoneyEditComponent } from './components/money-edit/money-edit.component';
import { MoneyDetailComponent } from './components/money-detail/money-detail.component'
import { MoneyService } from './services/money.service';
import { BranchAddComponent } from './components/branch-add/branch-add.component';
import { MoneyAddComponent } from './components/money-add/money-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoneyComponent,
    BranchComponent,
    BranchDetailComponent,
    BranchEditComponent,
    MoneyEditComponent,
    MoneyDetailComponent,
    BranchAddComponent,
    MoneyAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BranchService,
    MoneyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
