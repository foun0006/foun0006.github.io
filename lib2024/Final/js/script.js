
window.onload = init;
function init() {

	document.querySelector('#color-1').onclick = changeColor;
	document.querySelector('#color-2').onclick = changeColor;
	document.querySelector('#color-3').onclick = changeColor;

	document.querySelector('#loadTable').onclick = createTableFromJSON;


	
	document.querySelector('.reset').onclick = colorReset;
	
	document.querySelector('.ham').onclick = showHideMobileMenu;


	$('#form').submit(function (e) {
   		 e.preventDefault();
   		 var form = this;
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		showformValues(form);
   		 		createTableFromJSON();
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 })
	});

}


function changeColor() {

	var elementId = this.id;

	this.style.backgroundColor = "red";

	var indicatorText = document.getElementById("indicator-text");

	if(!indicatorText.innerHTML.includes(elementId)) {

		indicatorText.innerHTML = indicatorText.innerHTML+"<br>"+this.id+ " is active";
	}

}

function colorReset() {

	var jsColorDivs = document.getElementsByClassName('js-color');

	for(var i =0; i <jsColorDivs.length; i++ ) {
		console.log(i);

		jsColorDivs[i].style.backgroundColor ="";
	}

	document.getElementById("indicator-text").innerHTML="";
}


function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}

function showformValues(form){
	var formValues = $(form).serializeArray(); 
		
	$.each(formValues, function(index, field){
		$("#results").find("#"+field.name+"_result").text(field.value);
		if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	})				
}

 function createTableFromJSON() {
        var myBooks = [
            {
                "Student ID": "1",
                "Name": "John Doe",
                "Email": "jd@gmail.com",
                "Marks": "92.60"
            },
            {
                "Student ID": "2",
                "Name": "Mark",
                "Email": "mark@gmail.com",
                "Marks": "56.00"
            },
            {
                "Student ID": "3",
                "Name": "Sam",
                "Email": "sam@@gmail.com",
                "Marks": "90.40"
            }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Student ID', 'Name', 'Email' and 'Marks')
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }


        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("json_table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }