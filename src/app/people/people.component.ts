import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Http } from '@angular/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public loadingPeople$ = new Subject<boolean>();
  public people$: Observable<Array<any>>;

  constructor(private _http: Http) { }

  ngOnInit() {

    this.getPeople();
  }

  getPeople(event: any = null): void {
    if (event) {
      event.preventDefault();
    }

    this.onPeopleStarted();
    this.people$ = this._http.get('https://swapi.co/api/people/')
        .map(res => {
          const data = res.json();
          return data['results'];
        })
        .do(this.onPeopleFinished.bind(this));
  }

  onPeopleStarted(): void {
    this.loadingPeople$.next(true);
  }

  onPeopleFinished(): void {
    this.loadingPeople$.next(false);
  }

}
