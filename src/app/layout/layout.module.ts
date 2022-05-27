import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent,
    SidenavComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [TopBarComponent, SidenavComponent, FooterComponent, ContentComponent]
})


export class LayoutModule { }
