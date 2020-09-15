

function change_name(){
    document.getElementById("name_span").textContent = document.getElementById("name_text").value;
}

function change_phone() {
    document.getElementById("phone_span").textContent = document.getElementById("phone_number").value;
}

function change_start_date() {
    document.getElementById("start_span").textContent = document.getElementById("start_date").value;
}

function change_end_date() {
    document.getElementById("end_span").textContent = document.getElementById("end_date").value;
}

function change_adults_count() {
    document.getElementById("adults_span").textContent = document.getElementById("adults_count").value;
}

function change_childs_count() {
    document.getElementById("childs_span").textContent = document.getElementById("childs_count").value;
}

//console.log(tetmessage);

function updateMessage(){
    if(!valid){
        document.getElementById("errorMsg").textContent = error;
    }
    else {

        document.getElementById("errorMsg").textContent = error;
        cel1.textContent = reservations[(reservation_count - 1)].name;
        cel2.textContent = reservations[(reservation_count - 1)].phone;
        cel3.textContent = reservations[(reservation_count - 1)].adults;
        cel4.textContent = reservations[(reservation_count - 1)].childs;
        cel5.textContent = reservations[(reservation_count - 1)].start_date;
        cel6.textContent = reservations[(reservation_count - 1)].end_date;
        cel7.textContent = "$" + subtotal;
        cel8.textContent = "$" + tax;
        cel9.textContent = "$" + total.toFixed(2);

        document.getElementById("noOfReservations").textContent = "Number  of Reservations: " + noOfReserv;
        document.getElementById("reservationsAvgCost").textContent = "Average of reservations Total: $" + resAvgCost.toFixed(2);
        document.getElementById("totalAdult").textContent = "Total Number of Adult customers: " + ttAdults;
        document.getElementById("totalChilds").textContent = "Total Number of underage customers: " + ttChilds;
        
        

                                                                  
    }
}
