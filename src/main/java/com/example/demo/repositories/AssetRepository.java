package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Asset;



@Repository 
public interface AssetRepository extends JpaRepository<Asset,Integer> {
	@Query("FROM Asset WHERE entryMonth = ?1 and entryYear=?2")
    List<Asset> findByDate(int month,int year);
}
