import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('isFavorite') isSelected: boolean;
  starIcon = faStar;
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();

  ngOnInit(): void {}

  onClick(): void {
    this.isSelected = !this.isSelected;
    this.change.emit();
  }
}
