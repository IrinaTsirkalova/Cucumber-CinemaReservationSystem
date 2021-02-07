package uni.fmi.project;
import java.util.*;

/**
 * 
 */
public class Screening {
	
	  private List<Date> dateTime;
	  private List<Hall> hall;

    /**
     * Default constructor
     */
    public Screening() {
    }

    
	/**
	 * @param dateTime
	 * @param hall
	 */
	public Screening(List<Date> dateTime, List<Hall> hall) {
		super();
		this.dateTime = dateTime;
		this.hall = hall;
	}


	/**
	 * @return the dateTime
	 */
	public List<Date> getDateTime() {
		return dateTime;
	}

	/**
	 * @param dateTime the dateTime to set
	 */
	public void setDateTime(List<Date> dateTime) {
		this.dateTime = dateTime;
	}

	/**
	 * @return the hall
	 */
	public List<Hall> getHall() {
		return hall;
	}

	/**
	 * @param hall the hall to set
	 */
	public void setHall(List<Hall> hall) {
		this.hall = hall;
	}


  




    

}