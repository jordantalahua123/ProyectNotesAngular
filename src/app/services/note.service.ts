import { Injectable } from '@angular/core';
import Note from '../../models/Notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[]
  constructor() {
    this.notes = [
      {
        id:this.createId(),
        title:"Cita con el medico",
        marked:false
      },
      {
        id:this.createId(),
        title:"Contrasenia del wifi",
        marked:true
      }
    ]
  }
  createId=() =>{
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
}
