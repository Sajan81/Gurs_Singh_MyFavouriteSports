import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgStyle } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [NgFor, NgStyle, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 0,
        title: 'volleyball',
        description: 'Italian sports game',
        creator: 'voley',
        imgURL: 'https://cdn.britannica.com/81/198481-050-10CED2D9/Gilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.jpg',
        type: 'indoor-outdoor Sports',
        tags: ['tag1,tag2,tag3'],
      },
      {
        id: 1,
        title: 'football',
        description: 'portugese sports ',
        creator: 'portugese',
        imgURL: 'https://th.bing.com/th/id/R.b4a32fe481ccb2a4749b6a4eb7edf483?rik=Uuf1mHoLu3UG0g&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f2%2f7%2f364087.jpg&ehk=lsxPekXImfiWlhq0mAgfcVnlQ5ns07nPrvG5iw18%2fis%3d&risl=&pid=ImgRaw&r=0',
        type: 'outdoor sports',
        tags: ['tag1', 'tag2', 'tag3'],
      },
      {
        id: 2,
        title: 'cricket',
        description: 'engalnd',
        creator: 'England',
        imgURL: 'https://wallpaperdig.com/wp-content/uploads/2021/02/XDCFVBGNHJM.jpg',
        type: 'outdoor Sports',
        tags: ['tag1', 'tag2', 'tag3'],
      },
      {
        id: 3,
        title: 'basketball',
        description: 'British sports ',
        creator: 'United kinghdom',
        imgURL: 'https://th.bing.com/th/id/R.91481b6b1fb0602257167f392a63a308?rik=UTFXTdO3qSqmNA&pid=ImgRaw&r=0',
        type: 'outdoor sports',
        tags: ['tag1', 'tag2', 'tag3'],
      },
      {
        id: 4,
        title: 'table tennis',
        description: 'chinese',
        creator: 'table',
        imgURL: 'https://th.bing.com/th/id/R.fa7c50841b45a3d3d5178e80a8b5042b?rik=zOhA3GzEJQ4OOg&pid=ImgRaw&r=0',
        type: 'indorr Sport',
        tags: ['tag1', 'tag2', 'tag3'],
      },
      {
        id: 5,
        title: 'ping pong',
        description: 'italian',
        creator: 'italease',
        imgURL: 'https://th.bing.com/th/id/R.8255727d6d8f05e8482146320f72f37d?rik=S5sUMgKVBPNGQw&pid=ImgRaw&r=0',
        type: 'indoor Sports',
        tags: ['tag1', 'tag2', 'tag3'],
      },
     
    ];
  }
}