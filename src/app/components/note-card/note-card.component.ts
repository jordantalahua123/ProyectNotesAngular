import { Component, input } from '@angular/core';
import Note from '../../../models/Notes';

@Component({
  selector: 'app-note-card',
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  note = input<Note>();
}
