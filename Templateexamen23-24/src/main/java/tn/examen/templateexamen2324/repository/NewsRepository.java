package tn.examen.templateexamen2324.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import tn.examen.templateexamen2324.entity.News;

public interface NewsRepository extends JpaRepository<News, Long> {
    // Méthodes de recherche personnalisées
    List<News> findByTitleContainingOrContentContaining(String title, String content);
}