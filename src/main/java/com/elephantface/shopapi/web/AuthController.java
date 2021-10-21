package com.elephantface.shopapi.web;

import com.elephantface.shopapi.data.payloads.request.UserAuthRequest;
import com.elephantface.shopapi.data.payloads.response.AuthResponse;
import com.elephantface.shopapi.service.UserAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    UserAuthService userAuthService;

    @PostMapping("/authentication")
    public ResponseEntity<AuthResponse> passwordValidation(@RequestBody UserAuthRequest userAuthRequest){
        return new ResponseEntity<AuthResponse>(userAuthService.passwordValidation(userAuthRequest), HttpStatus.ACCEPTED);
    }
}
