import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogServiceService {
  constructor(private httpClient: HttpClient) {}
  randomDog(): Observable<Dog> {
    return this.httpClient.get<Dog>(`https://dog.ceo/api/breeds/image/random`);
  }
}

export interface Dog {
  message: string;
  status: string;
}
