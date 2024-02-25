// CommentaireController.java
package tn.examen.templateexamen2324.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.examen.templateexamen2324.entity.Commentaire;
import tn.examen.templateexamen2324.services.CommentaireService;

import java.util.List;

@RestController
@RequestMapping("/commentaires")
public class CommentaireController {

    @Autowired
    private CommentaireService commentaireService;

    @PostMapping("/add")
    public Commentaire addCommentaire(@RequestBody Commentaire commentaire) {
        return commentaireService.createCommentaire(commentaire);
    }

    @GetMapping("/getcommentaires")
    public List<Commentaire> getCommentaires() {
        return commentaireService.getAllCommentaires();
    }

    // Other methods like deleteCommentaire, getCommentaireById, etc. can be added as needed

}
