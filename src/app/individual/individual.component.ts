import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../api_responses/character';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
  character: Character;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCharacter(id);
  }

  getCharacter(id: string): void {
   this.charactersService.getCharacter(id).subscribe(character => {
     this.character = character;
    });
  }
}
