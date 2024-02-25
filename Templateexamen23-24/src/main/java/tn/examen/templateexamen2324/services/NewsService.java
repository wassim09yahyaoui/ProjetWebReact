package tn.examen.templateexamen2324.services;

import tn.examen.templateexamen2324.entity.News;
import tn.examen.templateexamen2324.repository.NewsRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewsService implements INewsService {

    private final NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @Override
    public List<News> getAllNews() {
        System.out.println("this line ");
        return newsRepository.findAll();
    }

    @Override
    public Optional<News> getNewsById(Long id) {
        return newsRepository.findById(id);
    }

    @Override
    public News createNews(News news) {
        return newsRepository.save(news);
    }

    @Override
    public Optional<News> updateNews(Long id, News updatedNews) {
        Optional<News> existingNews = newsRepository.findById(id);

        if (existingNews.isPresent()) {
            News newsToUpdate = existingNews.get();
            newsToUpdate.setTitle(updatedNews.getTitle());
            newsToUpdate.setContent(updatedNews.getContent());
            newsToUpdate.setDate(updatedNews.getDate());
            newsToUpdate.setMedia(updatedNews.getMedia());

            return Optional.of(newsRepository.save(newsToUpdate));
        }

        return Optional.empty();
    }

    @Override
    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }

    @Override
    public List<News> searchNewsByKeywords(String keywords) {
        return newsRepository.findByTitleContainingOrContentContaining(keywords, keywords);
    }

    // Nombre de vues
    @Override
    public void incrementViews(Long newsId) {
        Optional<News> existingNews = newsRepository.findById(newsId);

        existingNews.ifPresent(news -> {
            news.setViews(news.getViews() + 1);
            newsRepository.save(news);
        });
    }

    // Nombre de likes et dislikes
    @Override
    public void incrementLikes(Long id) {
        Optional<News> news = newsRepository.findById(id);
        news.ifPresent(n -> {
            n.setLikes(n.getLikes() + 1);
            newsRepository.save(n);
        });
    }

    @Override
    public void incrementDislikes(Long id) {
        Optional<News> news = newsRepository.findById(id);
        news.ifPresent(n -> {
            n.setDislikes(n.getDislikes() + 1);
            newsRepository.save(n);
        });
    }

    @Override
    public int getTotalLikes(Long id) {
        return newsRepository.findById(id).map(News::getLikes).orElse(0);
    }

    @Override
    public int getTotalDislikes(Long id) {
        return newsRepository.findById(id).map(News::getDislikes).orElse(0);
    }
}
