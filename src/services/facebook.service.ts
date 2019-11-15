import { Http } from '@angular/http';  
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookService {

  private accessToken = '#YOUR_ACCESS_TOKEN';

  private graphUrl = 'https://graph.facebook.com/';
  private graphQuery = `?access_token=${this.accessToken}&date_format=U&fields=posts{from,created_time,message,attachments}`;

  constructor(private http: Http) { }

/* PAGE D ACCUEIL */
  getPosts_home(pageName: string): Observable<any[]> {
    let url = this.graphUrl + 'me' + this.graphQuery;

    return this.http
        .get(url)
        .map(response => response.json().posts.data);
  }

/* PAGE BDE */
  getPosts_bde(pageName: string): Observable<any[]> {
    let url = this.graphUrl + '209650885768423' + this.graphQuery;

    return this.http
        .get(url)
        .map(response => response.json().posts.data);
  }

/* PAGE BDS */
  getPosts_bds(pageName: string): Observable<any[]> {
    let url = this.graphUrl + '498626270154870' + this.graphQuery;

    return this.http
        .get(url)
        .map(response => response.json().posts.data);
  }

}
