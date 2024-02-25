// NewsController.java
package tn.examen.templateexamen2324.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.examen.templateexamen2324.entity.News;
import tn.examen.templateexamen2324.services.NewsService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @PostMapping("/add")
    public News addNews(@RequestBody News news) {
        return newsService.createNews(news);
    }

    @GetMapping("/getnews")
    public List<News> GetNews() {
        return newsService.getAllNews();
    }



    @PutMapping("/update/{id}")
    public News updateNews(@PathVariable Long id, @RequestBody News updatedNews) {
        return newsService.updateNews(id, updatedNews).orElse(null);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteNews(@PathVariable Long id) {
        newsService.deleteNews(id);
    }

    @GetMapping("/search")
    public List<News> searchNewsByKeywords(@RequestParam String keywords) {
        return newsService.searchNewsByKeywords(keywords);
    }

    @PutMapping("/increment-views/{id}")
    public Optional<News> incrementViews(@PathVariable Long id) {
        newsService.incrementViews(id);
        return newsService.getNewsById(id);
    }

    @PutMapping("/like/{id}")
    public Optional<News> likeNews(@PathVariable Long id) {
        newsService.incrementLikes(id);
        return newsService.getNewsById(id);
    }

    @PutMapping("/dislike/{id}")
    public Optional<News> dislikeNews(@PathVariable Long id) {
        newsService.incrementDislikes(id);
        return newsService.getNewsById(id);
    }

    @GetMapping("/likes/{id}")
    public int getTotalLikes(@PathVariable Long id) {
        return newsService.getTotalLikes(id);
    }

    @GetMapping("/dislikes/{id}")
    public int getTotalDislikes(@PathVariable Long id) {
        return newsService.getTotalDislikes(id);
    }
}
