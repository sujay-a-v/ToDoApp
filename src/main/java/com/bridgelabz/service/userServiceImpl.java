package com.bridgelabz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.bridgelabz.dao.UserDao;
import com.bridgelabz.model.Label;
import com.bridgelabz.model.User;

public class userServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	
	@Override
	public void saveUserData(User user) {
		userDao.saveUser(user);	
	}

	@Override
	public User checkUserData(String email, String password) {
		return userDao.checkUser(email, password);
	}
	
	@Override
	public boolean isUserExist(String email) {
		return userDao.isUserExit(email);
	}
	
	@Override
	public User retrieveById(int id) {
		return userDao.retrieveById(id);
	}

	@Override
	public void activateUser(int id, User user) {
		userDao.activateUser(id, user);
		
	}

	@Override
	public User getByEmail(String email) {
		return userDao.getByEmail(email);
	}

	@Override
	public String passwordReset(User user) {
		return userDao.passwordReset(user);
	}

	@Override
	public List<User> getAllEmail() {
		
		return userDao.getAllEmail();
	}

	@Override
	public List<Label> getUserLabel(User use) {
		// TODO Auto-generated method stub
		return userDao.getUserLabel(use);
	}
}
