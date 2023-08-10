import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../shared/models/Item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  itemArray:Item[] = [];

  constructor(private _itemServ: ItemService,private  _router:Router) {
  }

  getAllItems() {
    this._itemServ.getAllItems().subscribe((items) => {
      this.itemArray = items;
      console.log(this.itemArray)

    })
  }

  ngOnInit(): void {
    this.getAllItems()
  }

  navigateTo(s: string) {
    console.log(s)
    this._router.navigateByUrl(s);
  }
}
