import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.scss']
})
export class DisplayImageComponent {

  @Input() imgSrc:string='';
  constructor(){
    console.log("imgSr: ",this.imgSrc);
  }
  

}
