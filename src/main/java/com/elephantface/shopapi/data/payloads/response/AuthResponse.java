package com.elephantface.shopapi.data.payloads.response;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class AuthResponse {
    private boolean authSuccess;
    private String firstName="";
    private String lastName="";
    private String email="";
    private Integer id=0;
    private String type;

    public AuthResponse(){}

    public boolean isAuthSuccess() {
        return authSuccess;
    }

    public void setAuthSuccess(boolean authSuccess) {
        this.authSuccess = authSuccess;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
