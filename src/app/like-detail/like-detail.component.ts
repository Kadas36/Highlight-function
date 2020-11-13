import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-detail',
  templateUrl: './like-detail.component.html',
  styleUrls: ['./like-detail.component.css']
})
export class LikeDetailComponent implements OnInit {

  likes = 0;

  incrementNumber(): any{
    this.likes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
