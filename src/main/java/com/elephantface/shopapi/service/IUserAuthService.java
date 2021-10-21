package com.elephantface.shopapi.service;

import com.elephantface.shopapi.data.payloads.request.UserAuthRequest;
import com.elephantface.shopapi.data.payloads.response.AuthResponse;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import org.springframework.stereotype.Component;

@Component
public interface IUserAuthService {
    AuthResponse passwordValidation(UserAuthRequest authRequest);
}
