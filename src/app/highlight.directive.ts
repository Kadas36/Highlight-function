import { Directive, ElementRef, HostListener } from '@angular/core';
import { MyService } from './services/myservice.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef, private myService: MyService ){
    const test = myService.push(elem);
  }

  private allelements = [];
  private filteredArray = [];

  @HostListener('click') onClicks(){
    this.allelements = this.myService.getElements();
    this.getAllLikes().then(() => {
      this.getTheHighestLikes();
     });
  }

  private getAllLikes() {
    return new Promise((resolve, reject) => {
      this.filteredArray = [];
      this.allelements.forEach((parentElement, idx, arr) => {
        this.filteredArray.push({
          likes: Number(parentElement.nativeElement.children[2].children[1].innerHTML),
          element: parentElement
        });
        console.log(this.filteredArray);
        if (idx === arr.length - 1) { resolve(); }
      });
    });
  }

  private getTheHighestLikes() {
    const sortDesc = this.filteredArray.sort((a,b) => { return b.likes - a.likes; } );
    sortDesc.forEach((el, idx, arr) => {
      if (idx === 0) {
        el.element.nativeElement.style.color = 'blue';
      } else {
        el.element.nativeElement.style.color = 'black';
      }
    })
  }

}
