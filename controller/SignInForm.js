//Sign In
$("#btnSignIn").on('click',()=>{
    var email =$("#email").val();
    var password = $("#password").val();

    var data = {
        email:email,
        password:password
    };


    $.ajax({
        url:"http://localhost:9090/shop/api/v1/user/signIn",
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify(data),


        success:function(response){
            localStorage.setItem('token',response.token);

            $("#signInForm").css('display','none');
            $("#dashboardFrom").css('display','block');
            $("#employeeForm").css('display','none');

            $("#sidebar").css('display','block');
        },

        error: function(xhr, status, error) {
            console.error("Error:", xhr.responseText);
            if (xhr.status === 403){
                alert("Please check username and password : ")
            }
        }
    });

    $("#email").val(null);
    $("#password").val(null);

})