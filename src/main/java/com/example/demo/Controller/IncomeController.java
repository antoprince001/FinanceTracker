package com.example.demo.Controller;


import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Income;
import com.example.demo.repositories.IncomeRepository;

@RestController
@CrossOrigin
public class IncomeController {

	@Autowired
	IncomeRepository incomeRepository;
	
	@GetMapping("/getincome")
	public Optional<Income> findById(@RequestParam(name = "id") int id) {
		return incomeRepository.findById(id);
	}
	
	@GetMapping("/income")
	public List<Income> showIncome() {
	
	    return incomeRepository.findAll();
	}
	
	@ResponseBody
	@PostMapping("/addincome")
    public String addIncome(@RequestBody Income income) {

        try { 
    		
        //int year = Calendar.getInstance().get(Calendar.YEAR);
        if(income.getEntryYear() <1900 || income.getEntryYear() > 3000) {
        	return ""+income.getEntryYear();
        }
        if(income.getEntryDay() > 31 || income.getEntryDay() < 1) {
        	return "Invalid Date";
        }
        if(income.getEntryMonth() > 12 || income.getEntryMonth() < 1) {
        	return "Invalid Month";
        }
        incomeRepository.save(income);
        return "success";
        }
        catch(Exception e) {
        	
        	System.out.println(e.getMessage());
        	return e.getMessage();
        }
        
    }
	
	@GetMapping("/incomebydate")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Income> getIncomeByDate(@RequestParam(name="year") int year,@RequestParam(name="month") int month) {
		
	    return incomeRepository.findByDate(month,year);
	}
	
	@ResponseBody
	@GetMapping("/deleteincome")
	public String deleteById(@RequestParam(name="id") int id) {
		try {
			incomeRepository.deleteById(id);
			return("Income deleted successfully");
		} catch (Exception e) {
			e.printStackTrace();
			return "Error deleting";
		}
		
	}
}
