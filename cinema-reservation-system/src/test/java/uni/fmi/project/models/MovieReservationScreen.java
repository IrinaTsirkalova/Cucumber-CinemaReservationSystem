package uni.fmi.project.models;
import java.util.*;

import uni.fmi.project.Movie;
import uni.fmi.project.services.MakeReservationService;

public class MovieReservationScreen {

	Date userDateAndTime;
	Movie movie;
	Date dateAndTime;
	int numberOfTickets;
	List<String> seats;
	String message;
	
	
	public void openScreen() {
		System.out.println("Екранът за резервация на филм е отворен!");
	}
	
	public void setUserDateAndTime(Date userDateAndTime) {
		this.userDateAndTime = userDateAndTime;
	}
	
	public void setMovie(Movie movie) {
		this.movie = movie;
	}
	
	public void setDateAndTime(Date reservationDate) {
		this.dateAndTime = reservationDate;
	}

	public void setNumberOfTickets(int numberOfTickets) {
		this.numberOfTickets = numberOfTickets;
		
	}

	public void setSeats(List<String> seats) {
		this.seats = seats;
		
	}
	public void clickReservationButton() {
		message = MakeReservationService.makeReservation(userDateAndTime, movie,dateAndTime,numberOfTickets,seats);
		
	}

	public String getReservationMessage() {
		return message;
	}
}
