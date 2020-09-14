var reservations = [];
var reservation_count = 0;
var allReservationCost = 0;
var allAdults = 0;
var allChilds = 0;
var tetmessage = "YES";
var error = "";
var valid = true;
var cel1, cel2, cel3, cel4, cel5, cel6, cel7, cel8, cel9;
var subtotal ;
var tax ;
var total;
var table, new_row;
var adults = [];
var childs = [];
var total_record = [];
var noOfReserv;
var resAvgCost;
var ttAdults;
var ttChilds;
var today;

function fare_calculation() {
    var cus_name = document.getElementById("name_text").value;
    var cus_phone = document.getElementById("phone_number").value;
    var tt_adults = Number(document.getElementById("adults_count").value);
    var tt_childs = Number(document.getElementById("childs_count").value);
    var r_start_date = document.getElementById("start_date").value;
    var r_end_date = document.getElementById("end_date").value;

    var reservation = {};

    if (r_start_date == "" && r_end_date == "" && cus_name == "" && cus_phone == "" && tt_adults == 0) {
        error = "Please provide details to continue";
        valid = false;
        updateMessage()
        return;
    }

    if (cus_name == "") {
        error = "Customer name cannot be empty";
        valid = false;
        updateMessage();
        return;
         
    }
    if (cus_phone=="") {
        error="Please enter phone number";
        valid=false;
        updateMessage();
        return;
    }

    if (!cus_phone.match(/^\d{10}$/)) {
        error = "Wrong phone Number format";
        valid = false;
        updateMessage();
        return;
    }

    

    if (r_start_date == "" ) {
        error = "Empty  starting date";
        valid = false;
        updateMessage();
        return;
    }

    if (r_end_date == "") {
        error = "Empty end date";
        valid = false;
        updateMessage();
        return;
    }

    var sDate = new Date(r_start_date);
    var eDate = new Date(r_end_date);

    
    today = new Date();
    if (sDate.getTime() < today.getTime()) {
        error = " Reservation starting date can't be in past";
        valid = false;
        updateMessage();
        return;
    }

    if (eDate.getTime() <= sDate.getTime()) {
        error = "Reservation Starting date cannot be greater than end date";
        valid = false;
        updateMessage();
        return;
    }


    if (tt_adults == 0 )
    {
        error = "Their must be atleast one adult in reservation";
        valid = false;
        updateMessage();
        return;
    }

    valid = true;
    error = "";
    reservation.name = cus_name;
    reservation.phone = cus_phone;
    reservation.adults = tt_adults;
    reservation.childs = tt_childs;
    reservation.start_date = r_start_date;
    reservation.end_date = r_end_date;

    
    reservations.push(reservation);
    

    subtotal = ((reservations[reservation_count].childs) * 8.99 + reservations[reservation_count].adults * 15.99).toFixed(2);
    tax = (subtotal * 0.08).toFixed(2);
    total = Number(subtotal) + Number(tax);


    // reservations.reservation.subTotal = subtotal;
    // reservations.reservation.tTax = tax;
    // reservations.reservation.tAmount = total;

    table = document.getElementsByTagName("table")[0];
    new_row = table.insertRow(table.rows.length);

    cel1 = new_row.insertCell(0);
    cel2 = new_row.insertCell(1);
    cel3 = new_row.insertCell(2);
    cel4 = new_row.insertCell(3);
    cel5 = new_row.insertCell(4);
    cel6 = new_row.insertCell(5);
    cel7 = new_row.insertCell(6);
    cel8 = new_row.insertCell(7);
    cel9 = new_row.insertCell(8);


    allAdults += tt_adults
    allChilds += tt_childs
    
    adults.push(allAdults);
    childs.push(allChilds);
    total_record.push(total);


    
    noOfReserv = reservations.length;
    ttAdults = Math.max(...adults);
    ttChilds = Math.max(...childs);
    
    

    
    


    updateMessage();
    reservation_count += 1;

    
                                                                 

    
}
