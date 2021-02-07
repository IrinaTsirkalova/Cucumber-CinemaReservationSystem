package uni.fmi.project.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;

import uni.fmi.project.Movie;
import uni.fmi.project.Reservation;

public class MakeReservationService {

	public static String makeReservation(Date userDate, Movie movie, Date movieDateAndTime, int numberOfTickets, List<String> seats) {
		
		if(movie.getMovieName() == null || movie.getMovieName().isEmpty()) {
			return "Неуспешна резервация. Моля изберете филм";
		}
		if(movieDateAndTime == null) {
			return "Неуспешна резервация. Моля изберете датата и час на прожекция";
		}
		if(numberOfTickets == 0) {
			return "Неуспешна резервация. Моля изберете броя на билетите";
		}
		if(seats == null || seats.isEmpty()) {
			return "Неуспешна резервация. Моля изберете място в залата";
		}

        List<Reservation> reservations = getReservation();

        boolean isSeatTaken = reservations.parallelStream()
				.anyMatch(reservation-> reservation.getSeats().equals(seats)
						&& reservation.getDate().equals(movieDateAndTime));
        
        
       // Date userTimeAfter60MinBeforeMovie = parseStringToDate("06-02-2021 17:30");  
       // LocalTime userTimeBefore = LocalTime.parse("17:31"); 
       // String userTimeString = new SimpleDateFormat("H:mm").format(userDate);//userTime
       //LocalTime userTime = LocalTime.parse(userTimeString);
       // String movieTimeString = new SimpleDateFormat("H:mm").format(movieDateAndTime);
       //LocalTime movieTime = LocalTime.parse(movieTimeString);
       //int isAfter = userTime.compareTo(userTimeBefore);
      
        long diffInMillies = Math.abs(userDate.getTime() - movieDateAndTime.getTime());
        long diffDay = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
        long diffTime = TimeUnit.MINUTES.convert(diffInMillies, TimeUnit.MILLISECONDS);
        
        if(isSeatTaken  && diffDay == 0 && diffTime < 60) {
			return "Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма. Избраните места са заети";
		}else if(diffDay == 0 && diffTime < 60) {
			return "Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма";
		}
        
        if(isSeatTaken) {
        	
			return "Избраните места са заети";
		
    }
		
		return "Успешно направихте резервация";
	}
	
  public static List<Reservation> getReservation(){
	    Movie movie = new Movie();
		movie.setMovieName("Железният човек");
		
		Date date = parseStringToDate("06-02-2021 18:30");
		
		List<String> seats = new ArrayList<String>();
		seats.add("11");
		seats.add("12");
		Reservation movieReservation = new Reservation(4586,date,movie,2,seats);

		List<Reservation> reservations = new ArrayList<Reservation>();
		reservations.add(movieReservation);

		return reservations;
		
	}
  
  //Parse String to date
  public static Date parseStringToDate(String dateToBeParsed){
	    Date result = null;
	    try{
	        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyyy HH:mm");
	        result  = dateFormat.parse(dateToBeParsed);
	    }

	    catch(ParseException e){
	        e.printStackTrace();

	    }
	    return result ;
	}
}
