import { Component, OnInit } from '@angular/core';
import { TrendingService } from './trending.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'api-watcher';
  obs: Observable<Object>
  result : any;

  constructor(private trend: TrendingService) {}

  ngOnInit(){

  }

  trending(){
    this.obs = this.trend.trendingMovies();
    this.obs.subscribe(this.getData);
  }

  getData = (data: any) => {
    this.result = data;
  }



}
