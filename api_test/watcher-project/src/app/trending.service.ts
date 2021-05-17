import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http: HttpClient) { }

  viewTrend(){
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=1d7d542f2171e76bf4908aca717c2cf7&page=1`
    let obsTrend = this.http.get(url);
    return obsTrend;
  }
}
