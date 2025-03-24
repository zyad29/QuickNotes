package com.quicknotes.repository;

import com.quicknotes.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    // Méthodes de requête personnalisées
    List<Note> findByCategoryId(Long categoryId);
    List<Note> findByImportantTrue();
}