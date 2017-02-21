import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { aboutRouting } from './about.routing';
import { AboutSectionComponent } from './about-section.component';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { UserService } from '../shared/services/user.service';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';


@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [
    AboutSectionComponent,
    AboutComponent,
    AboutUserComponent
  ],
  providers: [
    UserService,
    AboutUsersResolve,
    AboutUserResolve
  ],
})
export class AboutModule {}