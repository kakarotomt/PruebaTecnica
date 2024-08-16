import { Component, OnInit } from '@angular/core';
import { MoneyService } from '../../services/money.service';
import { IMoney } from '../../interfaces/money.interface'
import { Router } from '@angular/router';


@Component({
  selector: 'app-money',
  templateUrl: './money.component.html'
})
export class MoneyComponent implements OnInit {
  data!: IMoney[];

  constructor(private _moneyService: MoneyService,
    private _route: Router) { }

  ngOnInit(): void {
    this._moneyService.GetData().subscribe(res => {
      this.data = res;
    });
  }

  New(): void {
    this._route.navigate(['/MoneyAdd']);

  }

  DeleteMoney(id?: number): void {
    //this._moneyService.Delete(id).subscribe(opt => {
    //  this._moneyService.GetData().subscribe(res => {
    //    this.data = res;
    //  })
    //});
  }

  ViewMoney(id?: number): void {
    this._route.navigate(['/MoneyDetail', id]);
  }

  EditMoney(id?: number): void {
    this._route.navigate(['/MoneyEdit', id]);
  }
}
