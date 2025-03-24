package com.quicknotes.controller;

import com.quicknotes.model.Note;
import com.quicknotes.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:3000") // Pour permettre les requêtes depuis React
public class NoteController {
    
    private final NoteService noteService;
    
    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }
    
    @GetMapping
    public ResponseEntity<List<Note>> getAllNotes() {
        List<Note> notes = noteService.getAllNotes();
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable Long id) {
        return noteService.getNoteById(id)
                .map(note -> new ResponseEntity<>(note, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<Note>> getNotesByCategoryId(@PathVariable Long categoryId) {
        List<Note> notes = noteService.getNotesByCategoryId(categoryId);
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }
    
    @GetMapping("/important")
    public ResponseEntity<List<Note>> getImportantNotes() {
        List<Note> notes = noteService.getImportantNotes();
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }
    
    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note) {
        note.setCreatedAt(LocalDateTime.now());
        Note savedNote = noteService.saveNote(note);
        return new ResponseEntity<>(savedNote, HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note note) {
        return noteService.getNoteById(id)
                .map(existingNote -> {
                    note.setId(id);
                    // Conserver la date de création originale
                    note.setCreatedAt(existingNote.getCreatedAt());
                    Note updatedNote = noteService.saveNote(note);
                    return new ResponseEntity<>(updatedNote, HttpStatus.OK);
                })
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}