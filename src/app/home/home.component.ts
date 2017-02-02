import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  host: {
      class:'content'
  }
})
export class HomeComponent implements AfterViewInit {
    partners : string[] = [
        "assets/images/gnamlogo.jpeg",
        "assets/images/haas.png",
        "assets/images/HEC.jpg",
        "assets/images/LSE.jpg",
        "assets/images/HKUST.jpg",
        "assets/images/Yale_som.png",
        "assets/images/INSEAD Logo.png",
        "assets/images/Oxford.gif",
        "assets/images/NUS.jpg",
        "assets/images/IE.png",
        "assets/images/IMD.png",
        "assets/images/EGADE.jpeg",
        "assets/images/IIM Bangalore - logo.jpeg",
        "assets/images/ESMT.png",
        "assets/images/FGV.png",
        "assets/images/ICS.png",
        "assets/images/UBC_Sauder.jpg",
        "assets/images/GSB.png",
        "assets/images/INCAE.jpg",
        "assets/images/UCD.jpg",
        "assets/images/SNU.gif",
        "assets/images/Renmin.png",
        "assets/images/AIM.jpg",
        "assets/images/Pontificia.jpg",
        "assets/images/Koc.jpg",
        "assets/images/fudan logo.png",
        "assets/images/Lagos BS.png",
        "assets/images/UGBS.jpg",
        "assets/images/Technion_logo.jpg",
        "assets/images/Indonesia logo.png",
    ];
    
    public pages : string[][];
    
    ngAfterViewInit(){
        this.getPartners();
    }
    
    onResize(){
        this.getPartners();
    }
    
    getPartners(){
        var pageSize = window.innerWidth > 800 ? 10 : 4;
        var partners = JSON.parse(JSON.stringify(this.partners));
        this.pages = [];
        while(partners.length){
            this.pages.push(partners.splice(0, pageSize));
        }
    }
}