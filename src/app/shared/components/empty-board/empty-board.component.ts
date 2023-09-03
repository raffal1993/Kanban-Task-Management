import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-empty-board',
  styleUrls: ['./empty-board.component.scss'],
  templateUrl: './empty-board.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyBoardComponent {}
