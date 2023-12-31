import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  data = [
    { title: 'Recently played', albums: recentlyPlayed },
    { title: 'Heavy rotation', albums: heavyRotation },
    { title: 'Jump back in', albums: jumpBackIn },
  ];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true,
  };

  constructor(private router: Router) {}
  openAlbum(album: any) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

  dasherize(string: string) {
    return string.replace(/[A-Z]/g, function (char: string, index: number) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
  ngOnInit() {}
}
