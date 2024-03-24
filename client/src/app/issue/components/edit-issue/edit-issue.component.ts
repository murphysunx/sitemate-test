import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Issue } from '../../interfaces/issue.interface';
import { IssueService } from '../../services/issue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { EditIssueForm } from '../../interfaces/edit-issue.interface';

@Component({
  selector: 'app-edit-issue',
  standalone: true,
  imports: [CommonModule, IssueFormComponent],
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss'],
})
export class EditIssueComponent implements OnInit {
  issue?: Issue;

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.issueService.getIssueById(id).subscribe((issue) => {
      this.issue = issue;
    });
  }

  update(issue: EditIssueForm) {
    if (this.issue) {
      this.issueService.update(this.issue.id, issue).subscribe(() => {
        this.issue = undefined;
        this.router.navigate(['/issues/view', this.issue!.id]);
      });
    }
  }
}
