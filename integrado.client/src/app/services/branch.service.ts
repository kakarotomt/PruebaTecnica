import { Injectable } from '@angular/core';
import { IBranch } from '../interfaces/branch.interface'

@Injectable()
export class BranchService {
  constructor() {
    console.log("servicio listo");
  }

  GetData(): IBranch[] {
    return [
      { "Codigo": 1, "Descripcion": "Prueba1" },
      { "Codigo": 2, "Descripcion": "Prueba2" },
      { "Codigo": 3, "Descripcion": "Prueba3" }
    ];
  }

  GetDetails(id: number): IBranch {
    let branch = this.GetData().find((m) => m.Codigo == id);
    return branch ?? { Codigo: 0, Descripcion: "" };
;
  }

}
