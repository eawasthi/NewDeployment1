import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name_filter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: any[], filter_name: string): any {
  	if(!filter_name){ return value }

  	return value.filter(result => result._user.Name.indexOf(filter_name) > -1 || result.Score == filter_name || result.Percent == filter_name)
  }
}
