import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Dog, DogServiceService } from './dog-service.service';

// describe('DogServiceService', () => {
//   let service: DogServiceService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DogServiceService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

export const mockDog: Dog = {
  message: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_357.jpg',
  status: 'success',
};

describe('Dog Service', () => {
  let httpTestController: HttpTestingController;
  let service: DogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogServiceService],
      imports: [HttpClientTestingModule],
    });

    httpTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DogServiceService);
  });
  afterEach(() => {
    httpTestController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('random should should provide data', () => {
    service.randomDog().subscribe((dog: Dog) => {
      expect(dog).not.toBe(null);
      expect(JSON.stringify(dog)).toEqual(JSON.stringify(mockDog));
    });
    const req = httpTestController.expectOne(
      `https://dog.ceo/api/breeds/image/random`
    );

    req.flush(mockDog);
  });
});
