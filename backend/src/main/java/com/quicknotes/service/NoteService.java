package com.quicknotes.service;

import com.quicknotes.model.Note;
import com.quicknotes.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
    
    private final NoteRepository noteRepository;
    
    @Autowired
    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }
    
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }
    
    public Optional<Note> getNoteById(Long id) {
        return noteRepository.findById(id);
    }
    
    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }
    
    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }
    
    public List<Note> getNotesByCategoryId(Long categoryId) {
        return noteRepository.findByCategoryId(categoryId);
    }
    
    public List<Note> getImportantNotes() {
        return noteRepository.findByImportantTrue();
    }
}