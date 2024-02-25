// CommentaireRepository.java
package tn.examen.templateexamen2324.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.examen.templateexamen2324.entity.Commentaire;

public interface CommentaireRepository extends JpaRepository<Commentaire, Long> {
}
