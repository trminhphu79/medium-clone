import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'medium-app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreComponent {

  tags:string[] = ["Javascript", "Angular", "Webpack", ]
  searchChange(event: string|null) {
    console.log(event)
  }
}
