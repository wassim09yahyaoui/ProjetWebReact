package tn.examen.templateexamen2324.services;

// INewsService.java

import tn.examen.templateexamen2324.entity.News;
import java.util.List;
import java.util.Optional;

public interface INewsService {
    List<News> getAllNews();
    Optional<News> getNewsById(Long id);
    News createNews(News news);
    Optional<News> updateNews(Long id, News updatedNews);
    void deleteNews(Long id);

    // Nouvelle méthode pour la recherche par mots-clés
    List<News> searchNewsByKeywords(String keywords);

    void incrementViews(Long newsId);

    void incrementLikes(Long id);
    void incrementDislikes(Long id);
    int getTotalLikes(Long id);
    int getTotalDislikes(Long id);

}
