package com.elephantface.shopapi.web;

import com.elephantface.shopapi.data.models.Cart;
import com.elephantface.shopapi.data.payloads.request.CartRequest;
import com.elephantface.shopapi.data.payloads.response.CartItemsResponse;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import com.elephantface.shopapi.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cart")
public class CartController {
    @Autowired
    CartService cartService;

    @PostMapping("/addItem")
    public ResponseEntity<MessageResponse> createCareItem(@RequestBody CartRequest cartRequest){
        return new ResponseEntity<MessageResponse>(cartService.createCartsItems(cartRequest), HttpStatus.CREATED);
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<List<CartItemsResponse>> getAllItemsInCart(@PathVariable("id") Integer uId){
        return new ResponseEntity<List<CartItemsResponse>>(cartService.getCartsItemsFromUserId(uId),HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<MessageResponse> updateCart(@RequestBody CartRequest cartRequest,@PathVariable("id") Integer id){
        return new ResponseEntity<MessageResponse>(cartService.updateCartItemsById(cartRequest,id),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String>  deleteItem(@PathVariable Integer id){
        cartService.deleteItem(id);
        return  new ResponseEntity<String>("Item removed successfully",HttpStatus.OK);
    }
}
