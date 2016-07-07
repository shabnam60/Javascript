
/**
 * @author Shabnam.Rouzbeh , July 2016
 * Assignment 2
 * This JavaScript program calculates the number of links on http://explorecalifornia.org
 */

var myLinks = document.getElementsByTagName("a");

function anchorTotal (){
	//display number of anchors
	console.log ("Number of links in the document are : " + myLinks.length);

}
 
 function anchorList (){
 	//forward loop 
 	for ( var i = 0 ; i< myLinks.length ; i++ ){
 	console.log("The link at index " + i + " is : "+myLinks[i]);
 	}
 }
 
 function anchorReverse(){
 	//backward loop
 	for ( var i = myLinks.length -1 ; i >= 0 ; i--){
 	console.log("The link at index " + i + " is : "+myLinks[i]);
 	} 
 }
 

anchorTotal();
anchorList ();
console.log (" Now display all of the anchor tags in reverse order !! ");
anchorReverse();