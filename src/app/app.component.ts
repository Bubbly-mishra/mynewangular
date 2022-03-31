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

  public onOpenModal(artist: Artist, mode: string): void{


    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', 'addArtistModal');
    }
    if(mode === 'edit'){
      button.setAttribute('data-target', 'editArtistModal');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target', 'deleteArtistModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
