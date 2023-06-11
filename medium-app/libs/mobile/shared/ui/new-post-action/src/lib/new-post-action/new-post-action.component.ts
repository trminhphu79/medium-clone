import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-app-new-post-action',
  templateUrl: './new-post-action.component.html',
  styleUrls: ['./new-post-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostActionComponent {}
