//Age Calculator
export const calculate_age = (dob) => {
    try {
         var diff_ms = Date.now() - dob.getTime();
         var age_dt = new Date(diff_ms);

         return Math.abs(age_dt.getUTCFullYear() - 1970);
    } catch (error) {
         console.log(error);
    }

}

//Prints Date more Clear
export const date_formatter = (dob) => {
    try {
         var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
         
              var myArray = dob.split(",");

         const result = myArray.length < 3 ? dob : myArray[2] + " " + months[Number(myArray[1])-1] + " " + myArray[0];     

         return result;
         
    } catch (error) {
         console.log(error);
    }

}