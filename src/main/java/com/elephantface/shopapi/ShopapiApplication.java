package com.elephantface.shopapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class ShopapiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopapiApplication.class, args);
    }

    @GetMapping("/")
    public String getIndex(){
        return "index";
    }

}
