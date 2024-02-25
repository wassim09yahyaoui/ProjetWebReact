// CommentaireService.java
package tn.examen.templateexamen2324.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.examen.templateexamen2324.entity.Commentaire;
import tn.examen.templateexamen2324.repository.CommentaireRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CommentaireService implements ICommentaireService {

    private final CommentaireRepository commentaireRepository;

    @Autowired
    public CommentaireService(CommentaireRepository commentaireRepository) {
        this.commentaireRepository = commentaireRepository;
    }

    @Override
    public List<Commentaire> getAllCommentaires() {
        return commentaireRepository.findAll();
    }

    @Override
    public Optional<Commentaire> getCommentaireById(Long id) {
        return commentaireRepository.findById(id);
    }

    @Override
    public Commentaire createCommentaire(Commentaire commentaire) {
        return commentaireRepository.save(commentaire);
    }

    @Override
    public Optional<Commentaire> updateCommentaire(Long id, Commentaire updatedCommentaire) {
        Optional<Commentaire> existingCommentaire = commentaireRepository.findById(id);

        if (existingCommentaire.isPresent()) {
            Commentaire commentaireToUpdate = existingCommentaire.get();
            commentaireToUpdate.setContent(updatedCommentaire.getContent());
            // Ajoutez d'autres champs à mettre à jour selon vos besoins

            return Optional.of(commentaireRepository.save(commentaireToUpdate));
        }

        return Optional.empty();
    }

    @Override
    public void deleteCommentaire(Long id) {
        commentaireRepository.deleteById(id);
    }
}
