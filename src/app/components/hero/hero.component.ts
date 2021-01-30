import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService, Hero} from "../../services/heros.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  hero:Hero;
  constructor(private _activatedRoute:ActivatedRoute,
              private _herosService:HerosService) {
    this._activatedRoute.params.subscribe( params => {
      this.hero = this._herosService.getHeroByIndex(params['id']);
    })

  }


}
