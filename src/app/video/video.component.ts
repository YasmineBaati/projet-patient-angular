import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videoSrc!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the 'link' route parameter using ActivatedRoute
    this.route.paramMap.subscribe(params => {
      const link = params.get('link');
      this.videoSrc = `https://localhost:3003/r/${link}`;
    });
  }
}
