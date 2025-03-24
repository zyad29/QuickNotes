package com.quicknotes.repository;

import com.quicknotes.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Spring Data JPA va générer automatiquement les méthodes CRUD standards
    // Il est possible d'ajouter des méthodes de requête personnalisées ici si nécessaire
}