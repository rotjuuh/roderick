$(document).ready(function() {
	     alert ("the document is ready")
	     $("body").show()

		$("#searchbar").click(function(){
			console.log( "you clicked a searchbar!" );
		});
        
        $("nav")
        .animate ( {
        	height: 20 
        },  "slow", function() {
        	$("#advertisement").html("we're in the animation");
        } );
        
        
		
    }

);














