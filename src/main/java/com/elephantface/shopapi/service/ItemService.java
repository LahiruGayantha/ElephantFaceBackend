package com.elephantface.shopapi.service;

import com.elephantface.shopapi.data.models.Item;
import com.elephantface.shopapi.data.models.User;
import com.elephantface.shopapi.data.payloads.request.ItemRequest;
import com.elephantface.shopapi.data.payloads.response.GetItemRelatedToOwnerResponse;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import com.elephantface.shopapi.data.repository.IItemRepository;
import com.elephantface.shopapi.data.repository.IUserRepository;
import com.elephantface.shopapi.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService implements IItemService {

    @Autowired
    IItemRepository repository;

    @Autowired
    IUserRepository userRepo;

    @Override
    public MessageResponse createItem(ItemRequest itemRequest)throws ResourceNotFoundException {
        Optional<User> user = userRepo.findById(itemRequest.getOwnerId());
        if(user.isEmpty())throw new ResourceNotFoundException("User","id",itemRequest.getOwnerId());
        else {
            Item newItem = new Item();
            newItem.setName(itemRequest.getName());
            newItem.setDescription(itemRequest.getDescription());
            newItem.setImage(itemRequest.getImage());
            newItem.setUnitPrice(itemRequest.getUnitPrice());
            newItem.setOwner(user.get());
            repository.save(newItem);
            return new MessageResponse("New item has created successfully");
        }
    }

    @Override
    public MessageResponse updateItem(Integer id, ItemRequest itemRequest)throws ResourceNotFoundException {
        Optional<Item> item =  repository.findById(id);
        if(item.isEmpty()) throw new ResourceNotFoundException("Item","Id",id);
        Optional<User> owner = userRepo.findById(itemRequest.getOwnerId());
        if(owner.isEmpty()) throw new ResourceNotFoundException("User","id",itemRequest.getOwnerId());
        else {
            item.get().setName(itemRequest.getName());
            item.get().setDescription(itemRequest.getDescription());
            item.get().setImage(itemRequest.getImage());
            item.get().setUnitPrice(itemRequest.getUnitPrice());
            item.get().setOwner(owner.get());
            repository.save(item.get());
            return new MessageResponse("Item has successfully updated");
        }
    }

    @Override
    public MessageResponse deleteItem(Integer id) throws ResourceNotFoundException {
        Optional<Item> item  = repository.findById(id);
        if(item.isEmpty()) throw new ResourceNotFoundException("Item","Id",id);
        else {
            repository.deleteById(id);
            return new MessageResponse("Item has deleted");
        }
    }

    @Override
    public Item getItemFromId(Integer id) {
        return repository.findById(id).orElseThrow(()->new ResourceNotFoundException("Item","Id",id));
    }

    @Override
    public List<Item> getAllItems() {
        return repository.findAll();
    }

    @Override
    public List<GetItemRelatedToOwnerResponse> getAllItemsBelongsToUser(Integer userId) {
        List<GetItemRelatedToOwnerResponse> list = new ArrayList<>();
        for(Item item: repository.findItemByOwnerId(userId)){
        GetItemRelatedToOwnerResponse newItem  = new GetItemRelatedToOwnerResponse();
            newItem.setDescription(item.getDescription());
            newItem.setImage(item.getImage());
            newItem.setUnitPrice(item.getUnitPrice());
            newItem.setName(item.getName());
            newItem.setId(item.getId());
            list.add(newItem);
        }
        return list;
    }
}
