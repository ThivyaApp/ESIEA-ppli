import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookService } from './../../services/facebook.service';
import { Http } from '@angular/http';  
import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-bds',
  templateUrl: 'bds.html',
  providers: [FacebookService]
})
export class BdsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public facebookService: FacebookService) 
  {
    this.posts = this.facebookService
      .getPosts_bds('209650885768423')
      .map(data => data.map(this.mapPosts));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BdsPage');
  }

  public posts: Observable<any[]>;
	
  url : string;

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
