import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Note from '../../../models/Notes';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-create-note',
  imports: [FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent {
  noteTitle: string="";

  constructor(public noteService: NoteService) {
  }
  handleSubmit = () => {
    if (!this.noteTitle || this.noteTitle.trim() === '') {
      alert('Debe ingresar un título para la nota.'); // Muestra un mensaje en un cuadro de alerta.
      return;
  }
    const newNote: Note={
      id:this.noteService.createId(),
      title:this.noteTitle,
      marked: false
    }
    this.createNote(newNote);
    
  }
  createNote(newNote: Note){
    this.noteService.createNote(newNote).subscribe({
      next: () => {
        this.noteTitle = ''; // Limpia el campo después de crear la nota.
      },
      error: (e) => {
        console.log(e);
      },
    })
  }
  getNotes() {
    this.noteService.getNote().subscribe({
      next: (data) => {
        this.noteService.notes = data.reverse();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
