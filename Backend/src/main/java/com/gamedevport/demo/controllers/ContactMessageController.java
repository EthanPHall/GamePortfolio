package com.gamedevport.demo.controllers;

import com.gamedevport.demo.models.ContactMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;

@RestController
@RequestMapping("/api/contact-message")
public class ContactMessageController {
    @PostMapping
    public ResponseEntity<String> sendEmail(ContactMessage message) {
        System.out.println(message.getFirstName());
        System.out.println(message.getLastName());
        System.out.println(message.getEmail());
        System.out.println(message.getSubject());

        return new ResponseEntity<String>("Failure", HttpStatus.NOT_IMPLEMENTED);
    }
}
