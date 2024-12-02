import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NoteService } from '../../services/note.service';
import { NoteCardComponent } from '../../components/note-card/note-card.component';

@Component({
  selector: 'app-notes',
  imports: [HeaderComponent, NoteCardComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  constructor(public noteService: NoteService){

  }
}
