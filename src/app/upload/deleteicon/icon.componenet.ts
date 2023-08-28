import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

/**
 * @title Basic icons
 */
@Component({
  selector: 'delete-icon',
  templateUrl: 'icon.component.html',
  standalone: true,
  imports: [MatIconModule],
})
export class deleteIcon {}