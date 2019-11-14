import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser} from "@ionic-native/in-app-browser";
import { FacebookService } from './../../services/facebook.service';
import { Http } from '@angular/http';  
import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FacebookService]
})
export class HomePage {

public posts: Observable<any[]>;
	
  url : string;

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser, public facebookService: FacebookService) 
  {
    this.posts = this.facebookService
      .getPosts_home('209650885768423')
      .map(data => data.map(this.mapPosts));
  }

  Open(url){
  const browser = this.inAppBrowser.create(url,'_system');
  browser.show();
  }

   mapPosts = (post) => {
    return {
      from: post.from,
      time: post.created_time * 1000, // convert to milliseconds
      message: post.message,
      photos: this.getPhotos(post)
    };
  }
    getPhotos = (post) => {
    if (!post.attachments)
      return [];

    let attachments = post.attachments.data[0].subattachments ||
                      post.attachments;

    return attachments.data
      .filter(x => x.type == "photo")
      .map(x => x.media.image);
  }
}