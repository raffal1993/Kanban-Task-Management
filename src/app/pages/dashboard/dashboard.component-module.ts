import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponentModule } from 'src/app/shared/components/header/header.component-module';
import { SidebarComponentModule } from 'src/app/shared/components/sidebar/sidebar.component-module';
import { EmptyBoardComponentModule } from 'src/app/shared/components/empty-board/empty-board.component-module';

@NgModule({
  imports: [HeaderComponentModule, SidebarComponentModule, EmptyBoardComponentModule],
  declarations: [DashboardComponent],
  providers: [],
  exports: [DashboardComponent],
})
export class DashboardComponentModule {}
