/**
 * @author Shabnam.Rouzbeh
 * This JavaScript program calculates the number of available seats on the Airbus A380 airplane
 */
var copyright = " Copyright June2016  Shabnam Rouzbeh"; //copyright
var maxSeat = 555; //maximum seating capacity on the Airbus A380 airplane
var soldTickets = 523;
var vipPasses = 20;
var availableSeats ;

availableSeats = maxSeat - (soldTickets + vipPasses); //calculation for available seats on the plane

console.log(copyright); // displaying copyright info on console
console.log("number of available seats on the plane : " + availableSeats); 

