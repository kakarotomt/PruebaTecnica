import { Component } from '@angular/core';
import { IBranch } from '../../interfaces/branch.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../services/branch.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MoneyService } from '../../services/money.service';
import { IMoney } from '../../interfaces/money.interface';
import { OnInit } from '@angular/core'

@Component({
  selector: 'app-branch-edit',
  templateUrl: './branch-edit.component.html'
})
export class BranchEditComponent implements OnInit{
  data: IBranch = {};
  moneys: IMoney[] = [];
  frmGroup: FormGroup;
  constructor(private _activatedRoute: ActivatedRoute,
    private _builder: FormBuilder,
    private _branchService: BranchService,
    private _moneyService: MoneyService,
    private _route: Router) {
  }
  ngOnInit(): void {
    this._activatedRoute.params.subscribe(p => {
      this._branchService.GetDetails(p['id']).subscribe(resbr => {
        console.log(this.data);
        this.data = resbr;
        this._moneyService.GetData().subscribe(res => {
          this.moneys = res;
          console.log(this.moneys);
        });
      });
    });
    }

  Guardar(f: NgForm): void {
    let res = this._branchService.Update(this.data.codigo, this.data).subscribe(opt => {
      this._route.navigate(['/Branch']);
    });

  }
}
