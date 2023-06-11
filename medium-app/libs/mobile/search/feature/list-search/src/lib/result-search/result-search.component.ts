import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultSearchComponent {}
