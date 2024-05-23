$("#btnCusSave").on('click',()=>{
    let name = $("#customerName").val();
    let gender = "FEMALE";
    let joinDate = $("#cusJoinDate").val();
    let level = "NEW";
    let totalPoint = $("input[name='totalPoint']").val();
    let dob = $("#cusDob").val();
    let address01 = $("input[name='cusAddress01']").val();
    let address02 = $("input[name='cusAddress02']").val();
    let address03 = $("input[name='cusAddress03']").val();
    let address04 = $("input[name='cusAddress04']").val();
    let address05 = $("input[name='cusAddress05']").val();
    let contactNo = $("#cusContact").val();
    let email = $("#cusEmail").val();
    let recentPurchaseDateAndTime = $("#recentPurchaseDateAndTime").val();


    // if (!name){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Name Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (gender==="Select Gender"){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Gender Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!joinDate){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Join Date Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (level==="Select Level"){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Level Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    // if (!totalPoint){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Total Point Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!dob){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check DOB Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!address01){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Address 01 Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!address02) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Please Check Address 02 Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!address03) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Please Check Address 03 Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!address04){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Address 04 Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!address05){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Address 05 Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!contactNo){
    //     Swal.fire({
    //             icon:'error',
    //             title: 'Please Check Contact No Field',
    //             text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!email){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Email Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }
    //
    // if (!recentPurchaseDateAndTime){
    //     Swal.fire({
    //         icon:'error',
    //         title: 'Please Check Recent Purchase date & time Field',
    //         text: 'Something went wrong!'
    //     });
    //     return;
    // }


    let cusData = {
        cus_name:name,
        gender:gender,
        join_date_as_a_loyalty_customer:joinDate,
        level:level,
        total_points:totalPoint,
        dob:dob,
        address_line_01:address01,
        address_line_02:address02,
        address_line_03:address03,
        address_line_04:address04,
        address_line_05:address05,
        contact_no:contactNo,
        email:email,
        recent_purchase_date_and_time:recentPurchaseDateAndTime
    };

    let jsonData = JSON.stringify(cusData);

    console.log(localStorage.getItem("token"));

    $.ajax({
        url:'http://localhost:9090/shop/api/v1/customer/save',
        type:"POST",
        contentType: 'application/json',
        data:jsonData,
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("token")
        },

        success:function(response){
            console.log("------------"+response);
            if (response === false){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email is already registered. Please change email.'
                });
            }else if (response === true){
                Swal.fire({
                    icon: 'success',
                    title: 'Customer Update Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                loadCustomerData();
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred while saving customer data.'
                });
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while saving customer data. Please try again.'
            });
        }
    });
    loadCustomerData();
    $("#btnCusReset>button[type='reset']").click();
})


// load Data
function loadCustomerData() {
    $.ajax({
        url: 'http://localhost:9090/shop/api/v1/customer',
        type: "GET",
        processData: false,
        contentType: false,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (response) {
            setValue(response);
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText);
        }
    });
}


const setValue = (response)=>{
    $("#customer-tbl").empty();
    response.map((response) => {
        let recode = `<tr class='cus_name'><td>${response.cus_name}</td>
        <td class='gender'>${response.gender}</td><td class='join_date_as_a_loyalty_customer'>${response.join_date_as_a_loyalty_customer}</td>
        <td class='level'>${response.level}</td><td class='total_points'>${response.total_points}</td>
        <td class='dob'>${response.dob}</td><td class='address_line_01'>${response.address_line_01}</td>
        <td class='address_line_02'>${response.address_line_02}</td><td class='address_line_03'>${response.address_line_03}</td>
        <td class='address_line_04'>${response.address_line_04}</td><td class='address_line_05'>${response.address_line_05}</td>
        <td class='contact_no'>${response.contact_no}</td><td class='email'>${response.email}</td>
        <td class='recent_purchase_date_and_time'>${response.recent_purchase_date_and_time}</td>
        </tr>`
        $("customer-tbl").append(recode);
    })
}

