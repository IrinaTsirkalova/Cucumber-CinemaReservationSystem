package uni.fmi.project;
import java.util.*;

/**
 * 
 */
public class User {

    private String firstName;
    private String lastName;
    private int phoneNumber;
    private String email;
    public Set<Reservation> reservation;

    /**
     * Default constructor
     */
    public User() {
    }

    /**
	 * @param firstName
	 * @param lastName
	 * @param phoneNumber
	 * @param email
	 * @param reservation
	 */
	public User(String firstName, String lastName, int phoneNumber, String email, Set<Reservation> reservation) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.reservation = reservation;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}


	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}


	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	/**
	 * @return the phoneNumber
	 */
	public int getPhoneNumber() {
		return phoneNumber;
	}


	/**
	 * @param phoneNumber the phoneNumber to set
	 */
	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}


	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}


	/**
	 * @return the reservation
	 */
	public Set<Reservation> getReservation() {
		return reservation;
	}


	/**
	 * @param reservation the reservation to set
	 */
	public void setReservation(Set<Reservation> reservation) {
		this.reservation = reservation;
	}


	/**
     * @param userReservation
     */
    public void makeReservation(Reservation userReservation) {
        reservation.add(userReservation);
    }

    /**
     * @param userReservation
     */
    public void cancelReservation(Reservation userReservation) {
        reservation.remove(userReservation);
    }

    /**
     * @param userReservation
     */
    public void changeReservation(Reservation userReservation) {
    	
    int id = userReservation.getId();
    
    Iterator<Reservation> iterate = reservation.iterator();
    
     while(iterate.hasNext()) {
    	
    	 Reservation reservationOld = iterate.next();
    	 
    	 int idOld = reservationOld.getId();
         if (id==idOld) {
        	 reservation.remove(reservationOld);
        	 reservation.add(userReservation);
         }
             
    }
   
   
    	
    }
    

}