import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'medium-app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchControlComponent {
  @Input() placeholder: string = 'Search Medium';

  @Output() emitValue = new EventEmitter<string | null>();

  searchControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        tap((result) => {
          this.emitValue.next(result);
        })
      )
      .subscribe();
  }
}
