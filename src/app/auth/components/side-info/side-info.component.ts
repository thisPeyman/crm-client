import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-info',
  templateUrl: './side-info.component.html',
  styleUrls: ['./side-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
