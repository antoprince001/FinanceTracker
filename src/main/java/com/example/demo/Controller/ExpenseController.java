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

import com.example.demo.entity.Expense;
import com.example.demo.repositories.ExpenseRepository;

@RestController
@CrossOrigin
public class ExpenseController {

	@Autowired
	ExpenseRepository expenseRepository;
	
	@GetMapping("/getexpense")
	public Optional<Expense> findById(@RequestParam(name = "id") int id) {
		return expenseRepository.findById(id);
	}
	
	@GetMapping("/expense")
	public List<Expense> showExpense() {
	
	    return expenseRepository.findAll();
	}
	
	@ResponseBody
	@PostMapping("/addexpense")
    public String addExpense(@RequestBody Expense expense) {
        
        try { 
        if(expense.getEntryYear() <1900 || expense.getEntryYear() > 3000){
            	return "Invalid year";
        }
        if(expense.getEntryDay() > 31 || expense.getEntryDay() < 1) {
        	return "Invalid Date";
        }
        if(expense.getEntryMonth() > 12 || expense.getEntryMonth() < 1) {
        	return "Invalid Month";
        }
        expenseRepository.save(expense);
        return "success";
        }
        catch(Exception e) {
        	
        	System.out.println(e.getMessage());
        	return e.getMessage();
        }
        
    }
	
	@GetMapping("/expensebydate")
	public List<Expense> getExpenseByDate(@RequestParam(name="year") int year,@RequestParam(name="month") int month) {
		
	    return expenseRepository.findByDate(month,year);
	}
	
	@ResponseBody
	@GetMapping("/deleteexpense")
	public String deleteById(@RequestParam(name="id") int id) {
		try {
			expenseRepository.deleteById(id);
			return("Expense deleted successfully");
		} catch (Exception e) {
			e.printStackTrace();
			return "Error deleting";
		}
		
	}
}
