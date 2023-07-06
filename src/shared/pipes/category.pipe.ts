import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string ): string {
    switch (value) {
      case 'Mobile Development': return 'developer_mode'
      case 'Web Development': return 'javascript'
      case 'Data Science': return 'data_array'
      case 'Python Development': return 'dynamic_form'

    }
    return 'code';
  }

}
