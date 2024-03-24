import { Component, Input } from '@angular/core';
import { Issue } from '../../interfaces/issue.interface';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss'],
  standalone: true,
})
export class IssueDetailComponent {
  @Input() issue!: Issue;
}
