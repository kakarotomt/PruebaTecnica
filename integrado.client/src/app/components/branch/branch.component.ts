import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../services/branch.service';
import { IBranch } from '../../interfaces/branch.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html'
})
export class BranchComponent implements OnInit {
  data!: IBranch[];

  constructor(private _branchService: BranchService,
    private _route: Router) {}

  ngOnInit(): void {
    this._branchService.GetData().subscribe(res => {
      this.data = res;
    });
  }

  New(): void {
    this._route.navigate(['/BranchAdd']);

  }

  DeleteBranch(id?: number): void {
    this._branchService.Delete(id).subscribe(opt=>{
      this._branchService.GetData().subscribe(res => {
        this.data = res;
      })
    });
  }

  ViewBranch(id?: number): void {
    this._route.navigate(['/BranchDetail', id]);
  }

  EditBranch(id?: number): void{
    this._route.navigate(['/BranchEdit', id]);
  }
}
