package uni.fmi.project;
import java.util.*;

/**
 * 
 */
public class Hall {

    private String hallName;
    private List<String> seats;

    /**
     * Default constructor
     */
    public Hall() {
    }

    
	public Hall(String hallName, List<String> seats) {
		this.hallName = hallName;
		this.seats = seats;
	}


	/**
	 * @return the hallName
	 */
	public String getHallName() {
		return hallName;
	}

	/**
	 * @param hallName the hallName to set
	 */
	public void setHallName(String hallName) {
		this.hallName = hallName;
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