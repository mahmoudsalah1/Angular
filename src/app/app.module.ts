import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MyheaderComponent } from './myheader/myheader.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { CalclatorComponent } from './calclator/calclator.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CounterresultsComponent } from './counterresults/counterresults.component';
import { ButtoncomponentComponent } from './buttoncomponent/buttoncomponent.component';
import { MycustompipePipe } from './mycustompipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyheaderComponent,
    AboutMeComponent,
    SkillsComponent,
    FooterComponent,
    CalclatorComponent,
    PortfolioComponent,
    CounterresultsComponent,
    ButtoncomponentComponent,
    MycustompipePipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
