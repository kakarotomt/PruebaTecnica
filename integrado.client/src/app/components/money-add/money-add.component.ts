import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MoneyService } from '../../services/money.service';
import { IMoney } from '../../interfaces/money.interface';
import { OnInit } from '@angular/core'
@Component({
  selector: 'app-money-add',
  templateUrl: './money-add.component.html'
})
export class MoneyAddComponent implements OnInit {
  money: IMoney = {};
  msg: string = "";
  constructor(private _activatedRoute: ActivatedRoute,
    private _moneyService: MoneyService,
    private _route: Router) {
  }

  ngOnInit(): void {
  }

  Guardar(f: NgForm): void {
    if (f.valid) {
      let res = this._moneyService.Add(this.money).subscribe(opt => {
        this._route.navigate(['/Money']);
      });
    }
    else {
      this.msg = "No ha establecido correctamente el formulario";
    }
  }
}
