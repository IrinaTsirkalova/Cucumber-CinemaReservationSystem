package uni.fmi.project;

import static org.junit.Assert.assertEquals;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.project.models.MovieReservationScreen;

public class MovieReservationSteps {
	
    MovieReservationScreen movieReservationScreen = new MovieReservationScreen();
	
	@Given("^Потребителя отваря екрана за резервация на филм на \"([^\"]*)\"$")
    public void openReservationScreen(String userDateAndTime) throws Throwable {
		
		//parse userDateAndTime to Date type
		Date userDateAndTime2  = new SimpleDateFormat("dd-MM-yyyy HH:mm").parse(userDateAndTime);
		
        movieReservationScreen.setUserDateAndTime(userDateAndTime2);
	    movieReservationScreen.openScreen();
	}

	@When("^Избира името на филма \"([^\"]*)\"$")
    public void chooseMovie(String movieName) throws Throwable {
		
		Movie movie = new Movie();
	    movie.setMovieName(movieName);
		movieReservationScreen.setMovie(movie);
	}

	@When("^Избира датата и часа на прожекцията \"([^\"]*)\"$")
	public void chooseTimeAndDate(String reservationDate) throws Throwable {
	    Date reservationDate2;
	    
	    if(reservationDate.isEmpty() || reservationDate == null) {
	    	reservationDate2 = null;
	    	movieReservationScreen.setDateAndTime(reservationDate2);
	    }else {
	    	reservationDate2 =new SimpleDateFormat("dd-MM-yyyy HH:mm").parse(reservationDate);  
	 		movieReservationScreen.setDateAndTime(reservationDate2);
	    }
	    
	}

	@When("^Избира броя на билетите \"([^\"]*)\"$")
	public void chooseNumberOfTickets(int numberOfTickets) throws Throwable {
		 movieReservationScreen.setNumberOfTickets(numberOfTickets);
	}
	
	@When("^Избира местата \"([^\"]*)\", \"([^\"]*)\" за зала \"([^\"]*)\"$")
    public void chooseSeat(String seat1, String seat2, String hall) throws Throwable {
		
		List<String> chosenSeats = new ArrayList<String>();
		chosenSeats.add(seat1);
		if(seat1.isEmpty() && seat2.isEmpty()) {
			chosenSeats = null;
		}else if(!seat2.isEmpty()) {
		chosenSeats.add(seat2);
		}
	    movieReservationScreen.setSeats(chosenSeats);
	    movieReservationScreen.setHallName(hall);
	}

	@When("^Натиска върху бутона за резервация\\.$")
	public void clickReservationButton() throws Throwable {
	    movieReservationScreen.clickReservationButton();
	}


	@Then("^Вижда съобщение \"([^\"]*)\"\\.$")
	public void receiveMessage(String expectedMessage) throws Throwable {
		 assertEquals(expectedMessage,movieReservationScreen.getReservationMessage());	
	}


	

	


}
