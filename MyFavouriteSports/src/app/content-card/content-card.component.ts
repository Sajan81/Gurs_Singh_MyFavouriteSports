import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();
  title="My Application"
  constructor() {
    // Adding at least 3 valid items
    this.contentList.add({ id: 1, title: ' Online Game', description: 'Description 1', creator: 'Creator 1', imgURL: 'https://wallpapercave.com/wp/2mFQbur.jpg', type: 'Type 1',tags: ['tag1', 'tag2', 'tag3'] });
    this.contentList.add({ id: 2, title: 'Cricket', description: 'Description 2', creator: 'Creator 2', imgURL: 'https://filmdaily.co/wp-content/uploads/2020/12/cricket_lede.jpg', type: 'Type 2' });
    this.contentList.add({ id: 3, title: ' BasketBall', description: 'Description 3', creator: 'Creator 3', imgURL: 'https://images.hdqwalls.com/wallpapers/basketball-hd.jpg', type: 'Type 3' });
  }

  ngOnInit(): void {
    console.log(this.contentList)

  }
}
