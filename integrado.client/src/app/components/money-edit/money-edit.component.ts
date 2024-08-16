import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MoneyService } from '../../services/money.service';
import { IMoney } from '../../interfaces/money.interface';
import { OnInit } from '@angular/core'


@Component({
  selector: 'app-money-edit',
  templateUrl: './money-edit.component.html'
})
export class MoneyEditComponent implements OnInit {
  money: IMoney = {};
  msg: string = "";
  constructor(private _activatedRoute: ActivatedRoute,
    private _moneyService: MoneyService,
    private _route: Router) {
  }
  ngOnInit(): void {
    this._activatedRoute.params.subscribe(p => {
      this._moneyService.GetDetails(p['id']).subscribe(resbr => {
        console.log(this.money);
        this.money = resbr;
      });
    });
  }

  Guardar(f: NgForm): void {
    if (f.valid) {
      let res = this._moneyService.Update(this.money.codigo, this.money).subscribe(opt => {
        this._route.navigate(['/Money']);
      });
    }
    else {
      this.msg = "No ha establecido correctamente el formulario";
    }
  }
}
