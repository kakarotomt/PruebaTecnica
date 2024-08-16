import { Component } from '@angular/core';
import { IBranch } from '../../interfaces/branch.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../services/branch.service';
import { NgForm } from '@angular/forms';
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
  msg: string = "";

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
    if (f.valid) {

      let res = this._branchService.Add(this.data).subscribe(opt => {
        this._route.navigate(['/Branch']);
      });
    }
    else {
      this.msg = "No ha establecido correctamente el formulario";
    }
    

  }
}
