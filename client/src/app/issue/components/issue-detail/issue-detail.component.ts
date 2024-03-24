import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Issue } from '../../interfaces/issue.interface';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class IssueDetailComponent {
  @Input() issue!: Issue;
}
