import { Component } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';
import { Content} from '../helper-files/content-interface'

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {

  onContentAdded(newContent: Content) {
    // Handle the addition of new content here
    console.log('New content added:', newContent);
   // Push the new content to the contentArray
    // let newContentArray = this.contentArray;
    // newContentArray.push(newContent);
    // this.contentArray = newContentArray;
    this.contentArray = [...this.contentArray, newContent];
   

  }

  name : string | undefined;
   contentArray: Content[] = [];
  typePresent:boolean | undefined;
  inputValue:string='';
  defaultImageUrl:string="https://www.simplyrecipes.com/thmb/yFqFfLR03QG0cuAi5WgUSYPrh8Y=/5762x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Perfect-Cheesecake-LEAD-6-97a8cb3a60c24903b883c1d5fb5a69d3.jpg";
  
  
  constructor(){
  this.contentArray.push(
    
      { 
        id: 1, 
        title: 'Cricket', 
        description: 'Description for Content 1', 
        creator: 'Creator 1', 
        imgURL: 'https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg', 
        type: '', 
        tags: ['Tag1', 'Tag2'] 
      },
      { 
        id: 2, 
        title: 'Carom', 
        description: 'Description for Content 2', 
        creator: 'Creator 2', 
        imgURL: 'https://www.ubergames.co.uk/wp-content/uploads/2021/04/uber-games-carrom.jpg', 
        type: 'Indoor', 
        tags: [] 
      },
      { 
        id: 3, 
        title: 'Fortnite', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://wallpapers.com/images/featured/fortnite-pictures-b5kfcchwazwiz3cs.jpg', 
        type: 'Digital', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 4, 
        title: 'Ludo', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://m.media-amazon.com/images/I/71RAEx04-jL._AC_UF894,1000_QL80_.jpg', 
        type: 'Indoor', 
        tags: ['Tag5', 'Tag6'] 
      },  { 
        id: 5, 
        title: 'Ruzzel', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Ruzzle_logo.png/220px-Ruzzle_logo.png ', 
        type: 'Digital', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 6, 
        title: 'Football', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/1200px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg', 
        type: '', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 7, 
        title: 'Carrom', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: '', 
        type: 'Indoor', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 8, 
        title: 'PubG', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg', 
        type: 'Digital', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 9, 
        title: ' Hockey', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/b2unl1gppjiic0fld0em', 
        type: '', 
        tags: ['Tag5', 'Tag6'] 
      }
     );
    }
    search(str:string){
     
      for(let  i=0; i < this.contentArray.length; i++){
        if(this.contentArray[i].title==str)
        {
          this.typePresent=true;
          break;
        }
      
      else if(this.contentArray[i].title!=str)
       this.typePresent=false;
      }
      
    }

}