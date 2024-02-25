package tn.examen.templateexamen2324;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import tn.examen.templateexamen2324.controller.CorsConfig;

@Import(CorsConfig.class)
@SpringBootApplication
public class Templateexamen2324Application {

    public static void main(String[] args) {
        SpringApplication.run(Templateexamen2324Application.class, args);
    }

}
