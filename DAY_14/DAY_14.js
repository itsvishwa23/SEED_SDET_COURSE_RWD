function validation() {
  var name_check = document.getElementById("name").value;
  var phone_check = document.getElementById("phone").value;
  var des_check = document.getElementById("designation").value;

  var flag = /^(?:null|[a-zA-Z\s]+)$/.test(name_check);
  var flag2 = /^\+91[0-9]{10}$/.test(phone_check);
  var flag3 = /^(?:null|[a-zA-Z\s]+)$/.test(des_check);

  if (!flag) {
    var name_Show = document.getElementById("name_error");
    name_Show.innerHTML = "Please enter a valid name (only letters and spaces)";
    return false; // return false if name is invalid
  } else {
    var name_Show = document.getElementById("name_error");
    name_Show.innerHTML = "";
  }

  if (!flag2) {
    var phone_Show = document.getElementById("phone_error");
    phone_Show.innerHTML =
      "Please enter a valid phone number in the format +91XXXXXXXXXX";
    return false; // return false if phone is invalid
  } else {
    var phone_Show = document.getElementById("phone_error");
    phone_Show.innerHTML = "";
  }

  if (!flag3) {
    var des_Show = document.getElementById("designation_error");
    des_Show.innerHTML =
      "Please enter a valid designation (only letters and spaces)";
    return false; // return false if designation is invalid
  } else {
    var des_Show = document.getElementById("designation_error");
    des_Show.innerHTML = "";
  }

  return true; // return true if all fields are valid
}
