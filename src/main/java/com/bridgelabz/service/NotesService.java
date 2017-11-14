package com.bridgelabz.service;

import java.util.List;

import com.bridgelabz.model.Notes;
import com.bridgelabz.model.User;

public interface NotesService {
	
	public void addUserNotes(Notes notes);
	
	public void dalateUserNotes(int id);
	
	public void modifiedNotes(int id,Notes note);
	
	public List<Notes> fetchAllNotes(User user);
	public Notes fetchById(int id);

}