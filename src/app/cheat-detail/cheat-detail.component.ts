import { Component, OnInit, Input } from '@angular/core';
import { Cheat } from '../cheat';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CheatService } from '../cheat.service';

@Component({
  selector: 'app-cheat-detail',
  templateUrl: './cheat-detail.component.html',
  styleUrls: ['./cheat-detail.component.css']
})
export class CheatDetailComponent implements OnInit {
  @Input() cheat?: Cheat;

  constructor(
    private route: ActivatedRoute,
    private cheatService: CheatService,
    private location: Location
  ) { }

  ngOnInit(): void {
      this.getCheat()
  }
  getCheat(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cheatService.getCheat(id)
      .subscribe(cheat => this.cheat = cheat);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.cheat) {
      this.cheatService.updateCheat(this.cheat)
        .subscribe(() => this.goBack());
    }
  }
}
