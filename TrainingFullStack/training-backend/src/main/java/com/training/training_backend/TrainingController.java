package com.training.training_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController 
@CrossOrigin (origins = "*")
public class TrainingController {
    @Autowired 
    private TrainingRepository repository;
    @PostMapping ("/registrations")
    public Training add(@RequestBody Training training){
        return repository.save(training);
    }
    
}
