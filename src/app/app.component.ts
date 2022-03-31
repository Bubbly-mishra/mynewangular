import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Artist } from './artist';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public artists: Artist[];

  constructor(private artistService: ArtistService){ }

  ngOnInit() {
    this.getArtists();
  }

  public getArtists(): void{
    this.artistService.getArtists().subscribe(
      (Response: Artist[]) => {
      this.artists = Response;
      console.log(this.artists);
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
    
  }

}
