package com.gamedevport.demo.models;

public class ContactMessage {
    private String firstName;
    private String lastName;
    private String email;
    private String subject;

    public ContactMessage(String firstName, String lastName, String email, String subject) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getSubject() {
        return subject;
    }
}
