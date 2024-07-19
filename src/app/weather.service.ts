import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apikey = 'f7a997f391fcd5b5496594ded59d5155';

  constructor(private http: HttpClient) {}

  getweather(data: any): Observable<any> {
    console.log(data);
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${data.cityname}&appid=${this.apikey}`
    );
  }
}
