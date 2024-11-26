import { Pipe, PipeTransform } from '@angular/core';
import {Fighter} from "./shared/models/user";

@Pipe({
  name: 'nameCombinePipe',
  standalone: true
})
export class NameCombinePipePipe implements PipeTransform {

  transform( Fighter:Fighter): String {
    return `${Fighter.firstName} ${Fighter.lastName}`;
  }

}
