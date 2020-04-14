window.onload = init;

function init() {

	$('#loadTable').click(function (e) {
   		 e.preventDefault();
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		createTableFromJSON();
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 })
	});

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

        var table = document.createElement("table");


        var tr = table.insertRow(-1);                   // ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // HEADER.
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

        var divContainer = document.getElementById("json_table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }