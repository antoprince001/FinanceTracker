package com.example.demo.Controller;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Liability;
import com.example.demo.repositories.LiabilityRepository;



@RestController
@CrossOrigin
public class LiabilityController {

	@Autowired
	LiabilityRepository liabilityRepository;
	
	@GetMapping("/getliability")
	public Optional<Liability> findById(@RequestParam(name = "id") int id) {
		return liabilityRepository.findById(id);
	}
	
	@GetMapping("/liability")
	public List<Liability> showLiability() {
	
	    return liabilityRepository.findAll();
	}
	
	@ResponseBody
	@PostMapping("/addliability")
    public String addLiability(@RequestBody Liability liability) {
        
        try { 
        if(liability.getEntryYear() <1900 || liability.getEntryYear() > 3000){
            	return "Invalid year";
          }
        if(liability.getEntryDay() > 31 || liability.getEntryDay() < 1) {
        	return "Invalid Date";
        }
        if(liability.getEntryMonth() > 12 || liability.getEntryMonth() < 1) {
        	return "Invalid Month";
        }
        liabilityRepository.save(liability);
        return "success";
        }
        catch(Exception e) {
        	
        	System.out.println(e.getMessage());
        	return e.getMessage();
        }
        
    }
	
	@GetMapping("/liabilitybydate")
	public List<Liability> getLiabilityByDate(@RequestParam(name="year") int year,@RequestParam(name="month") int month) {
		
	    return liabilityRepository.findByDate(month,year);
	}
	
	@ResponseBody
	@GetMapping("/deleteliability")
	public String deleteById(@RequestParam(name="id") int id) {
		try {
			liabilityRepository.deleteById(id);
			return("Liability deleted successfully");
		} catch (Exception e) {
			e.printStackTrace();
			return "Error deleting";
		}
		
	}
}
