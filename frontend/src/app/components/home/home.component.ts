import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filesScripsts = [
    '../../assets/js/jquery-1.11.3.min.js',
    '../../assets/bootstrap/js/bootstrap.min.js',
    '../../assets/js/jquery.countdown.js',
    '../../assets/js/jquery.isotope-3.0.6.min.js',
    '../../assets/js/waypoints.js',
    '../../assets/js/owl.carousel.min.js',
    '../../assets/js/jquery.magnific-popup.min.js',
    '../../assets/js/jquery.meanmenu.min.js',
    '../../assets/js/sticker.js',
    '../../assets/js/main.js'
  ];

  filesLinks = [
    {
      rel: 'stylesheet',
      type: '',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: 'https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: '../../../assets/css/all.min.css'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: '../../../assets/bootstrap/css/bootstrap.min.css'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: '../../../assets/css/owl.carousel.css'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: '../../assets/css/magnific-popup.css'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: '../../../assets/css/animate.css'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: '../../../assets/css/meanmenu.min.css'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: '../../../assets/css/main.css'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: '../../../assets/css/responsive.css'  
    }
  ];

  constructor(private _loadScripts: LoadScriptsService) { 
    // _loadScripts.load(this.filesScripsts);
    // _loadScripts.loadLinks(this.filesLinks);
  }

  ngOnInit(): void {

  }

}
