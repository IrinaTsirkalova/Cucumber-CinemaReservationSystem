package uni.fmi.project;
import java.util.*;

/**
 * 
 */
public class Reservation {

	private int id;
    private Date date;
    private Movie movie;
    private User user;
    private int numberOfTickets;
    private List<String> seats;


    /**
     * Default constructor
     */
    public Reservation() {
    	
    }

	public Reservation(int id,Date date, Movie movie, int numberOfTickets,List<String> seats) {
		this.id = id;
		this.date = date;
		this.movie = movie;
		this.numberOfTickets = numberOfTickets;
		this.seats = seats;
	}


	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}


	/**
	 * @param date the date to set
	 */
	public void setDate(Date date) {
		this.date = date;
	}

	/**
	 * @return the movie
	 */
	public Movie getMovie() {
		return movie;
	}

	/**
	 * @param movie the movie to set
	 */
	public void setMovie(Movie movie) {
		this.movie = movie;
	}



	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}

	/**
	 * @return the numberOfTickets
	 */
	public int getNumberOfTickets() {
		return numberOfTickets;
	}

	/**
	 * @param numberOfTickets the numberOfTickets to set
	 */
	public void setNumberOfTickets(int numberOfTickets) {
		this.numberOfTickets = numberOfTickets;
	}

	/**
	 * @return the seats
	 */
	public List<String> getSeats() {
		return seats;
	}

	/**
	 * @param seats the seats to set
	 */
	public void setSeats(List<String> seats) {
		this.seats = seats;
	}
	
	

}