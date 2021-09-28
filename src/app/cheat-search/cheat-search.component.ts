import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Cheat } from '../cheat';
import { CheatService } from '../cheat.service';

@Component({
  selector: 'app-cheat-search',
  templateUrl: './cheat-search.component.html',
  styleUrls: ['./cheat-search.component.css']
})
export class CheatSearchComponent implements OnInit {
  cheats$!: Observable<Cheat[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private cheatService: CheatService) { }

  /** Push a search term into the observable stream  */
  search (term: string): void {
    this.searchTerms.next(term);

  }
  ngOnInit(): void {
    this.cheats$ = this.searchTerms.pipe(
      //wait 300ms after each keystroke before considering the term
      debounceTime(300),

      //ignore new term is same as previous terms
      distinctUntilChanged(),

      //switch to new search observable each time the term changes
      switchMap((term: string) => this.cheatService.searchCheats(term)),
    );
  }
}
