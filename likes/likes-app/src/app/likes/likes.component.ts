import { Component } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  likescount: number = 0;
  likeclicked: boolean = false;

  updateLikesCount(){
    this.likescount += (this.likeclicked) ? -1 : 1;
    this.likeclicked = !this.likeclicked;
  }
}
