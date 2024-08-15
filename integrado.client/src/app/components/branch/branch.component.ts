import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../services/branch.service';
import { IBranch } from '../../interfaces/branch.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.css'
})
export class BranchComponent implements OnInit {
  public data: IBranch[] = [];

  constructor(private _branchService: BranchService,
    private _route: Router) { }

  ngOnInit(): void {
    this.GetBranches();
    console.log(this.data);
  }

  GetBranches() :void {
   this.data = this._branchService.GetData();
  }

  ViewBranch(id?: number): void {
    this._route.navigate(['/BranchDetail', id]);
  }
}
