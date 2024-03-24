import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueDetailComponent } from '../issue-detail/issue-detail.component';
import { Issue } from '../../interfaces/issue.interface';

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [CommonModule, IssueDetailComponent],
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss'],
})
export class IssueListComponent {
  @Input() issues: Issue[] = [];
}
