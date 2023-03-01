import { Component } from '@angular/core';

interface Profile{
  key: String, 
  value: String
}
@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.scss']
})
export class ShowProfileComponent {
  displayedColumns=['key', 'value'];
  profileDetail: Profile[] =[
    {
      key:'photo', 
      value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPV2bvN1pU4JFcyHu7nANwHXnc6dWhzmSrJQS2vGd&s'
    },
    {
      key: 'name',
      value: 'Sophiya Singh'
    },
    {
      key: 'bio',
      value: 'Fun, eager, and kind'
    },
    {
      key: 'phone',
      value: '+748813073'
    },
    {
      key:'email',
      value: 'aabbcc@gmail.com'
    }
  ];
}
