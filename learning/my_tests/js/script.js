$(function() { // document ready
	var data = '';	
	//print(data);

    var words = $( "p" ).text().split( /\s+/ );
    var text = words.join( "</span> <span>" );
    print(text);
    $( "p" ).html(text);

    $('#result').load("content.htm", function(responseTxt, statusTxt, xhr){
    		if(statusTxt === 'sucess'){
    			alert('sucess:' + xhr.status);
    		}else if (statusTxt === 'error') {
    			alert("An error occurred: " + xhr.status + " - " + xhr.statusText);
    		}
    });


});

function print(data){
	$('#result').html(data);
}
/*
function appendItemsToList(){

	var item1 = $("<li></li>").text("Item 1");
	var item2 = "<li>Item 2</li>";
	var item3 = "<li>Item 3</li>";

	$('#olTestList2').append(item1, item2);
	$('#olTestList2 li:last-of-type').prepend(item3);
}
*/





