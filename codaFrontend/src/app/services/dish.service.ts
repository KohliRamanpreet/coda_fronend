import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../shared/dish';
import { map, catchError } from 'rxjs/operators';
import { ErrorProcessorService } from './error-processor.service';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  modalDishId: number = null;
  dishess: Dish[] = null;

  constructor(
    private http: HttpClient,
    private errorProcessorService: ErrorProcessorService
  ) {}

  getDishes(): Observable<any> {
    return this.http
      .get<Dish[]>('http://starlord.hackerearth.com/recipe')
      .pipe(
        map((res) => {
          if (res) {
            this.dishess = res;
            let d=new Dish();
            d.id=10;
            d.name="Macroni";
            d.image=" ../assets/Images/Img8.jpg";
            d.category="new";
            d.price="1.09";
            d.description="All blended with cheese and pepporoni ";
            d.liked=false;
            d.label="new";
                this.dishess.push(d );
                let d1=new Dish();
            d1.id=11;
            d1.name="Chowmein";
            d1.image=" ../assets/Images/Img1.jpg";
            d1.category="new";
            d1.price="1.99";
            d1.description="Sprinkled with spices from the core of India";
            d1.liked=false;
            d1.label="new";
            this.dishess.push(d1);
            
            return { dishes: res };
          } else {
            return { dishes: null };
          }
        })
      )
      .pipe(catchError(this.errorProcessorService.handleError));
  }

  setId(id: number) {
    this.modalDishId = id;
  }
}
