import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreComponent {

  searchChange(event: string|null) {
    console.log(event)
  }
}
