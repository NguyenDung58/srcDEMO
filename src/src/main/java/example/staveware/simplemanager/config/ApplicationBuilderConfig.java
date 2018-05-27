package example.staveware.simplemanager.config;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

import example.staveware.simplemanager.Application;

public class ApplicationBuilderConfig extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder
        configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }
}
