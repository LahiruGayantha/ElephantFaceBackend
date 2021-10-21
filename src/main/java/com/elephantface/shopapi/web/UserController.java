package com.elephantface.shopapi.web;

import com.elephantface.shopapi.data.models.User;
import com.elephantface.shopapi.data.payloads.request.UserRequest;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import com.elephantface.shopapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/add")
    public ResponseEntity<MessageResponse> createUser(@RequestBody UserRequest request){
        MessageResponse response = userService.createUser(request);
        return new ResponseEntity<MessageResponse>(response, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<List<User>>(userService.getAllUsers(),HttpStatus.OK);
    }

}
