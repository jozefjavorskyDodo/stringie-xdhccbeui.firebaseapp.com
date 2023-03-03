
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { pseudo_random_strs } from "../actions_file";

@Component({
  selector: "app-sub",
  templateUrl: "./sub.component.html"
})

export class SubComponent {

  strs$: Observable<string>;

  constructor(private store: Store<{ strs: string }>) {
    this.strs$ = store.select("strs");
  }

  pseudo_random_strs() {
    this.store.dispatch(pseudo_random_strs());
  }

}