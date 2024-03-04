import { Pipe, PipeTransform } from '@angular/core';
import { Content} from './helper-files/content-interface'
@Pipe({
  name: 'contentTypeFilter'// defining a variable 
})
export class ContentTypeFilterPipe implements PipeTransform {
  transform(contents: Content[], typeFilter: string = ''): Content[] { // coverting string into variable 
    if (!contents || !Array.isArray(contents)) {
      return [];
    }
    if (!typeFilter) {
      return contents.filter(item => !item.type);
    }
    return contents.filter(item => item.type === typeFilter);
  }
}