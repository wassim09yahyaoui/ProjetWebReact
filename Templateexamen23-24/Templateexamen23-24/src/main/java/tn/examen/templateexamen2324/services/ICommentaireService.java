// ICommentaireService.java
package tn.examen.templateexamen2324.services;

import tn.examen.templateexamen2324.entity.Commentaire;

import java.util.List;
import java.util.Optional;

public interface ICommentaireService {
    List<Commentaire> getAllCommentaires();
    Optional<Commentaire> getCommentaireById(Long id);
    Commentaire createCommentaire(Commentaire commentaire);
    Optional<Commentaire> updateCommentaire(Long id, Commentaire updatedCommentaire);
    void deleteCommentaire(Long id);
}
