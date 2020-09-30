import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog, DogServiceService } from '../dog-service.service';
@Component({
  selector: 'app-dog-component',
  templateUrl: './dog-component.component.html',
  styleUrls: ['./dog-component.component.css'],
})
export class DogComponentComponent {
  doggo$: Observable<Dog>;
  constructor(private dogService: DogServiceService) {
    this.doggo$ = dogService.randomDog();
  }
}
