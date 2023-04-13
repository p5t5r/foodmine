import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.component';
import { Food } from 'src/app/shared/models/Food';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = [];
  
  constructor(private foodService:FoodService) {
    this.foods = foodService.getAll();
  }

}
