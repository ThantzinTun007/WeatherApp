import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
 

  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    
      }

      searchResult : any;
      iconURL : any;
      searchForm = new FormGroup({
        'cityname': new FormControl(null),
      });


      submitForm(){
        console.log(this.searchForm.value,'searchForm#');
    
        this.service.getweather(this.searchForm.value).subscribe((result) => {
          console.log(result, 'cityname##');
          this.searchResult = result;
          this.iconURL = 'https://openweathermap.org/img/wn/' + this.searchResult.weather[0].icon + '@2x.png'
        })
    
      }
    
}
