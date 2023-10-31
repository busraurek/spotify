import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata/albums/';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  data = null as any;
  constructor(private activetedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const title = this.activetedRoute.snapshot.paramMap.get('title') as any;
    const decodedTitle = decodeURIComponent(title);
    this.data = albums[decodedTitle];
  }

  dasherize(string: string) {
    return string.replace(/[A-Z]/g, function (char: string, index: number) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
}
