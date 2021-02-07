package uni.fmi.project.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


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
        
        
        Date userTimeAfter60MinBeforeMovie = parseStringToDate("06-02-2021 17:30");
        //LocalTime userTimeBefore = LocalTime.parse("17:31");
        //String userTimeString = new SimpleDateFormat("H:mm").format(userDate);
        //LocalTime userTime = LocalTime.parse(userTimeString);
        //int isAfter = userTime.compareTo(userTimeBefore);
        
        if(isSeatTaken  && userDate.compareTo(userTimeAfter60MinBeforeMovie)>0) {
			return "Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма. Избраните места са заети";
		}else if(userDate.compareTo(userTimeAfter60MinBeforeMovie)>0) {
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
