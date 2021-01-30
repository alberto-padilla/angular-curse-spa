import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Hero, HerosService} from "../../services/heros.service";

@Component({
  selector: 'app-heros-filter',
  templateUrl: './heros-filter.component.html'
})
export class HerosFilterComponent implements OnInit{
  heros:Hero[];
  constructor(private _activatedRoute:ActivatedRoute,
              private _herosService:HerosService,
              private _router:Router) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.heros = this._herosService.getHerosByName(params['termino']);
    })
  }

  showHero = (idx:number) => this._router.navigate(['/hero', idx]);

}
