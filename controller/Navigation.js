$("#btnDashboard").on('click',()=>{
    $("#dashboardFrom").css('display','block');
    $("#employeeForm").css('display','none');
    $("#customerForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#inventoryForm").css('display','none');
    $("#saleForm").css('display','none');
})

$("#btnEmployee").on('click',()=>{
    $("#dashboardFrom").css('display','none');
    $("#employeeForm").css('display','block');
    $("#customerForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#inventoryForm").css('display','none');
    $("#saleForm").css('display','none');
})

$("#btnCustomer").on('click',()=>{
    $("#dashboardFrom").css('display','none');
    $("#employeeForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#customerForm").css('display','block');
    $("#inventoryForm").css('display','none');
    $("#saleForm").css('display','none');
})

$("#btnSupplier").on('click',()=>{
    $("#dashboardFrom").css('display','none');
    $("#employeeForm").css('display','none');
    $("#customerForm").css('display','none');
    $("#inventoryForm").css('display','none');
    $("#supplierForm").css('display','block');
    $("#saleForm").css('display','none');
})

$("#btnInventory").on('click',()=>{
    $("#dashboardFrom").css('display','none');
    $("#employeeForm").css('display','none');
    $("#customerForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#saleForm").css('display','none');
    $("#inventoryForm").css('display','block');
})

$("#btnSale").on('click',()=>{
    $("#dashboardFrom").css('display','none');
    $("#employeeForm").css('display','none');
    $("#customerForm").css('display','none');
    $("#inventoryForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#saleForm").css('display','block');
})