package uni.fmi.project;
import java.util.*;

/**
 * 
 */
public class Movie {

    private String movieName;
    private Date releaseDate;
    private String synopsis;
    private List<Screening> screenings;

    /**
     * Default constructor
     */
    public Movie() {
    }

    public Movie(String movieName,Date releaseDate, String synopsis, List<Screening> screenings) {
    	this.movieName = movieName;
    	this.releaseDate = releaseDate;
    	this.synopsis = synopsis;
    	this.screenings = screenings;
    }

	/**
	 * @return the movieName
	 */
	public String getMovieName() {
		return movieName;
	}

	/**
	 * @param movieName the movieName to set
	 */
	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	/**
	 * @return the releaseDate
	 */
	public Date getReleaseDate() {
		return releaseDate;
	}

	/**
	 * @param releaseDate the releaseDate to set
	 */
	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	/**
	 * @return the synopsis
	 */
	public String getSynopsis() {
		return synopsis;
	}

	/**
	 * @param synopsis the synopsis to set
	 */
	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	/**
	 * @return the screenings
	 */
	public List<Screening> getScreenings() {
		return screenings;
	}

	/**
	 * @param screenings the screenings to set
	 */
	public void setScreenings(List<Screening> screenings) {
		this.screenings = screenings;
	}
    

  

}