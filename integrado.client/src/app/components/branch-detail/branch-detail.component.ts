import { Component } from '@angular/core';
import { IBranch } from '../../interfaces/branch.interface';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.component.html',
  styleUrl: './branch-detail.component.css'
})
export class BranchDetailComponent {
  data: IBranch = {};
  constructor(private _activatedRoute: ActivatedRoute,
    private _branchService: BranchService) {
    this._activatedRoute.params.subscribe(p => {
      this.data = _branchService.GetDetails(p['id']);
    });
  }

  Eliminar(id?:number): void{ }
}
