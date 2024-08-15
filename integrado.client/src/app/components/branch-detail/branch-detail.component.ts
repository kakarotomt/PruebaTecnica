import { Component } from '@angular/core';
import { IBranch } from '../../interfaces/branch.interface';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from '../../services/branch.service';
import { MoneyService } from '../../services/money.service';
import { Router } from '@angular/router';
import { IMoney } from '../../interfaces/money.interface';


@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.component.html'
})
export class BranchDetailComponent {
  data: IBranch = {};
  moneys: IMoney[] =[];
  constructor(private _activatedRoute: ActivatedRoute,
    private _branchService: BranchService,
    private _moneyService: MoneyService,
    private _route: Router) {
    this._activatedRoute.params.subscribe(p => {
      _branchService.GetDetails(p['id']).subscribe(res => {
        this.data = res;
        _moneyService.GetData().subscribe(resmon => {
          this.moneys = resmon;
        });
      });
    });
  }

  Eliminar(id?: number): void {
    this._branchService.Delete(id).subscribe(opt => {
      this._route.navigate(['/Branch']);
    });
  }
  Editar(id?: number): void {
    this._route.navigate(['/BranchEdit', id]);
  }
}
