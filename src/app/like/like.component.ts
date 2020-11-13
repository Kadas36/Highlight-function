import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {


  quotes: string[];

  constructor(){
    this.quotes = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case'];
  }


  ngOnInit(): void {
  }

}
