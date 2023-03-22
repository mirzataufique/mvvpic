import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-galery',
  templateUrl: './img-galery.component.html',
  styleUrls: ['./img-galery.component.css']
})
export class ImgGaleryComponent implements OnInit {

  constructor() { }
images = [
    { img: "/assets/images/image1.jpg", thumb: "/assets/images/image1.jpg", description: "Image 1" },
    {img: "/assets/images/image2.jpg", thumb: "/assets/images/image2.jpg", description: "Image 2" },
    {img: "/assets/images/image4.jpeg", thumb: "/assets/images/image4.jpeg", description: "Image 3" },
    {img: "/assets/images/image5.jpeg", thumb: "/assets/images/image1.jpeg", description: "Image 4" },
    {img: "/assets/images/image5.jpg", thumb: "/assets/images/image5.jpg", description: "Image 5" },
    {img: "/assets/images/image6.jpg", thumb: "/assets/images/image6.jpg", description: "Image 6" },
    {img: "/assets/images/image7.jpg", thumb: "/assets/images/image7.jpg", description: "Image 7" },
    {img: "/assets/images/image8.jpg", thumb: "/assets/images/image8.jpg", description: "Image 8" },
    {img: "/assets/images/image9.jpg", thumb: "/assets/images/image9.jpg", description: "Image 9" },
    {img: "/assets/images/image10.jpg", thumb: "/assets/images/image10.jpg", description: "Image 10" },
    {img: "/assets/images/image11.jpg", thumb: "/assets/images/image11.jpg", description: "Image 11" },
    {img: "/assets/images/image12.jpg", thumb: "/assets/images/image12.jpg", description: "Image 12" },
    {img: "/assets/images/image13.jpg", thumb: "/assets/images/image13.jpg", description: "Image 13" },
    {img: "/assets/images/image14.jpg", thumb: "/assets/images/image14.jpg", description: "Image 14" },
    {img: "/assets/images/image16.jpg", thumb: "/assets/images/image16.jpg", description: "Image 16" },
    {img: "/assets/images/image17.jpg", thumb: "/assets/images/image17.jpg", description: "Image 17" },
    // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", description: "Image 3" },
    // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", description: "Image 4" },
    // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", description: "Image 5" },
    // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", description: "Image 6" },
    // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", description: "Image 7" },
    // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", description: "Image 8" },
    // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", description: "Image 9" }
  ];
  ngOnInit(): void {
  }

}
