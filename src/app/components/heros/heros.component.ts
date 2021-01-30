import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HerosService, Hero} from '../../services/heros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styles: [
  ]
})
export class HerosComponent implements OnInit {
  heros:Hero[] = [];

  constructor(private _herosService:HerosService,
              private _router:Router) {
  }

  ngOnInit(): void {
    this.heros = this._herosService.getHeros();
  }

  showHero = (i:number) => this._router.navigate(['/hero', i]);

}
