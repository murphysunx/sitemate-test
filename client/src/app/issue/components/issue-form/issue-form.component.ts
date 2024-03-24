import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Issue } from '../../interfaces/issue.interface';
import { EditIssueForm } from '../../interfaces/edit-issue.interface';

@Component({
  selector: 'app-issue-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss'],
})
export class IssueFormComponent implements OnInit {
  @Input() issue?: Issue;
  @Input() cta!: string;

  @Output() submit = new EventEmitter<EditIssueForm>();

  title: string = '';
  description: string = '';

  ngOnInit(): void {
    this.title = this.issue?.title || '';
    this.description = this.issue?.description || '';
  }

  save() {
    this.submit.emit({ title: this.title, description: this.description });
  }
}
