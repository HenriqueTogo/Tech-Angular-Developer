import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4hPsxOAesfq6RAjycmTMRKUZFS_HlaBwtw&usqp=CAU';
  contentTitle:string = 'Meu Artigo';
  contentDescription:string = 'Filme do Homem-Aranha';
  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }
}
