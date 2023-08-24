import { Lesson } from './lesson.interface';

export interface Course {
  _id: string;
  name: string;
  category: string;
  lessons?: Lesson[];
}
