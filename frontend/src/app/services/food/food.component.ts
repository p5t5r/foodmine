import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { sample_foods } from 'src/data';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodService {
  getAll(): Food[] {
    return sample_foods;
  }
}
