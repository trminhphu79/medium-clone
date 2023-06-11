import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'medium-app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {

  @Input() dataSource: string[] = []
  @Input() color:string = 'medium'
  
  @Output() emitValue = new EventEmitter()


  select(value: string) {
    console.log('tag...',value)
    this.emitValue.emit(value)
  }
}
