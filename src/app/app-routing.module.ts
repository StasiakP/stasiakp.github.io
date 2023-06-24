import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: 'tic-tac-toe',
    component: TicTacToeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
