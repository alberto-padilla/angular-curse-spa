import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Hero} from "../../services/heros.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {
  @Input() hero:Hero;
  @Input() index:number;

  @Output() heroSelected: EventEmitter<number>;

  constructor(private _router:Router) {
    this.heroSelected = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  showHero = () => this.heroSelected.emit( this.index );

}
