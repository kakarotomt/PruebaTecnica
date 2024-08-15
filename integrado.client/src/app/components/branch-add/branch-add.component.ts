import { Component } from '@angular/core';
import { IBranch } from '../../interfaces/branch.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../services/branch.service';
import { FormGroup, NgForm } from '@angular/forms';
import { MoneyService } from '../../services/money.service';
import { IMoney } from '../../interfaces/money.interface';
import { OnInit } from '@angular/core'

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html'
})
export class BranchAddComponent implements OnInit {
  data: IBranch = {};
  moneys: IMoney[] = [];
  frmGroup: FormGroup;
  constructor(private _activatedRoute: ActivatedRoute,
    private _branchService: BranchService,
    private _moneyService: MoneyService,
    private _route: Router) {
  }
  ngOnInit(): void {
    this._moneyService.GetData().subscribe(res => {
      this.moneys = res;
      console.log(this.moneys);
    });
  }

  Guardar(f: NgForm): void {
    console.log("inicia post");
    let res = this._branchService.Add(this.data);
    this._route.navigate(['/Branch']);

  }
}
