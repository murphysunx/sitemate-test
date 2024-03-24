import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EditIssueForm } from '../../interfaces/edit-issue.interface';
import { IssueService } from '../../services/issue.service';
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-issue',
  standalone: true,
  imports: [CommonModule, IssueFormComponent, RouterModule],
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss'],
})
export class CreateIssueComponent {
  constructor(private issueService: IssueService, private router: Router) {}

  create(issue: EditIssueForm) {
    this.issueService.createIssue(issue).subscribe((newIssue) => {
      this.router.navigate(['/issues/view', newIssue.id]);
    });
  }
}
