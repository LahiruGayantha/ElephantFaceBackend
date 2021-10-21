package com.elephantface.shopapi.data.payloads.request;

import com.elephantface.shopapi.data.models.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class UserAuthRequest {
    @NotBlank
    @NotNull
    private String email;
    @NotBlank
    @NotNull
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

}
