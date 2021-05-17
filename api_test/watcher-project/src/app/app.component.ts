import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TrendingService } from './trending.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'watcher-project';
  obsTrends : Observable<Object>;
  result : any;

  constructor(private trend : TrendingService){
    this.obsTrends = trend.viewTrend();
    this.obsTrends.subscribe((data) => this.result = data);
    //this.obsTrends.subscribe((data) => console.log(data));

  }
}
