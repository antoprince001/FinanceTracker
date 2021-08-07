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

import com.example.demo.entity.Asset;
import com.example.demo.repositories.AssetRepository;



@RestController
@CrossOrigin
public class AssetController {

	@Autowired
	AssetRepository assetRepository;
	
	@GetMapping("/getasset")
	public Optional<Asset> findById(@RequestParam(name = "id") int id) {
		return assetRepository.findById(id);
	}
	
	@GetMapping("/asset")
	public List<Asset> showAsset() {
	
	    return assetRepository.findAll();
	}
	
	@ResponseBody
	@PostMapping("/addasset")
    public String addAsset(@RequestBody Asset asset ) {
        
        try { 
        if(asset.getEntryYear() <1900 || asset.getEntryYear() > 3000){
        	return "Invalid year";
        }
        if(asset.getEntryDay() > 31 || asset.getEntryDay() < 1) {
        	return "Invalid Date";
        }
        if(asset.getEntryMonth() > 12 || asset.getEntryMonth() < 1) {
        	return "Invalid Month";
        }
        assetRepository.save(asset);
        return "success";
        }
        catch(Exception e) {
        	
        	System.out.println(e.getMessage());
        	return e.getMessage();
        }
        
    }
	
	@GetMapping("/assetbydate")
	public List<Asset> getAssetByDate(@RequestParam(name="year") int year,@RequestParam(name="month") int month) {
		
	    return assetRepository.findByDate(month,year);
	}
	
	@ResponseBody
	@GetMapping("/deleteasset")
	public String deleteById(@RequestParam(name="id") int id) {
		try {
			assetRepository.deleteById(id);
			return("Asset deleted successfully");
		} catch (Exception e) {
			e.printStackTrace();
			return "Error deleting";
		}
		
	}
}
