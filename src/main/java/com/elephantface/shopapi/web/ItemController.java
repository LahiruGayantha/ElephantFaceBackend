package com.elephantface.shopapi.web;

import com.elephantface.shopapi.data.models.Item;
import com.elephantface.shopapi.data.payloads.request.ItemRequest;
import com.elephantface.shopapi.data.payloads.response.GetItemRelatedToOwnerResponse;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import com.elephantface.shopapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/item")
public class ItemController {

    @Autowired
    ItemService itemService;

    @PostMapping("/add")
    public ResponseEntity<MessageResponse> addItem(@RequestBody ItemRequest itemRequest){
        return new ResponseEntity<MessageResponse>(itemService.createItem(itemRequest), HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Item>> getAllItems(){
        return new ResponseEntity<List<Item>>(itemService.getAllItems(),HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Item> getItem(@PathVariable("id") Integer id){
        return new ResponseEntity<Item>(itemService.getItemFromId(id),HttpStatus.OK);
    }

    @GetMapping("/findByUser/{id}")
    public ResponseEntity<List<GetItemRelatedToOwnerResponse>> getItemByUser(@PathVariable("id") Integer id){
        return new ResponseEntity<List<GetItemRelatedToOwnerResponse>>(itemService.getAllItemsBelongsToUser(id),HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<MessageResponse> updateItem(@PathVariable("id") Integer id,@RequestBody ItemRequest itemRequest){
        return new ResponseEntity<MessageResponse>(itemService.updateItem(id,itemRequest),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MessageResponse> deleteItem(@PathVariable("id") Integer id){
        return new ResponseEntity<MessageResponse>(itemService.deleteItem(id),HttpStatus.OK);
    }
}
