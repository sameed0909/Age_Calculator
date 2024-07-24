document.addEventListener("DOMContentLoaded", function() {
    $('input').val('');
    var calculateAgeBtn = document.getElementById("img-div");
    calculateAgeBtn.addEventListener("click", function() {
        var array = [];
        //Year
        var yearField = document.getElementById("_year");
        var yearErrorMessage = document.getElementById("y_error");
        if (yearField.value) {
            if (isNaN(yearField.value)) {
                yearErrorMessage.textContent = "Input a valid year";
            }
            else {
                const date = new Date();
                var currentYear = date.getFullYear();
                if (parseInt(yearField.value) >= 1 && parseInt(yearField.value) <= currentYear) {
                    array.push(parseInt(yearField.value));
                    yearErrorMessage.textContent = "";
                }
                else {
                    if (parseInt(yearField.value) < 1) {
                        yearErrorMessage.textContent = "Input a valid year";
                    }
                    else if (parseInt(yearField.value) > currentYear) {
                        yearErrorMessage.textContent = "Year must be in the past";
                    }
                }
            }
        }

        else {
            yearErrorMessage.textContent = "This field is required";
        }

        //Month
        var monthField = document.getElementById("_month");
        var monthErrorMessage = document.getElementById("m_error");
        if (monthField.value) {
            if (isNaN(monthField.value)) {
                monthErrorMessage.textContent = "Input a valid month";
            }
            else {
                if (parseInt(monthField.value) >= 1 && parseInt(monthField.value) <= 12) {
                    array.push(parseInt(monthField.value));
                    monthErrorMessage.textContent = "";
                }
                else {
                    monthErrorMessage.textContent = "Input a valid month";
                }
            }
        }

        else {
            monthErrorMessage.textContent = "This field is required";
        }

        //Day
        var dayField = document.getElementById("_day");
        var dayErrorMessage = document.getElementById("d_error");
        if (dayField.value) {
            if (isNaN(dayField.value)) {
                dayErrorMessage.textContent = "Input a valid day";
            }
            else {
                if (parseInt(dayField.value) >= 1 && parseInt(dayField.value) <= 31) {
                    array.push(parseInt(dayField.value));
                    dayErrorMessage.textContent = "";
                    if (parseInt(monthField.value) == 2) {
                        var yearToCheck = parseInt(yearField.value);
                        if (isNaN(yearToCheck)) {

                        }
                        else {
                            if (yearToCheck % 4 === 0 && (yearToCheck % 100 !== 0 || yearToCheck % 400 === 0)) {
                                if (parseInt(dayField.value) > 29) {
                                    alert ("The year you entered is a leap year and the month of February has only 29 days in a leap year.");
                                    dayErrorMessage.textContent = "Input a valid day";
                                    if (array.length == 3) {
                                        array.pop();
                                    }
                                }
                                else {
                                    if (array.length == 3) {
                                        array[2] = parseInt(dayField.value);
                                    }
                                }
                            } else {
                                if (parseInt(dayField.value) > 28) {
                                    alert ("The year you entered is not a leap year and the month of February has only 28 days in a leap year.");
                                    dayErrorMessage.textContent = "Input a valid day";
                                    if (array.length == 3) {
                                        array.pop();
                                    }
                                }
                                else {
                                    if (array.length == 3) {
                                        array[2] = parseInt(dayField.value);
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    dayErrorMessage.textContent = "Input a valid day";
                }
            }
        }
        else {
            dayErrorMessage.textContent = "This field is required";
        }

        if (array.length == 3) {
            const date = new Date();
            var currentYear = date.getFullYear();
            var currentMonth = date.getMonth() + 1; // Adding 1 because months are zero-based
            var currentDay = date.getDate();

            var userDays = parseInt(dayField.value);
            var userMonth = parseInt(monthField.value);
            var userYears = parseInt(yearField.value);

            // Calculating Age in Years
            var ageInYears = null;
            if (currentMonth > userMonth || (currentMonth === userMonth && currentDay >= userDays)) {
                ageInYears = currentYear - userYears;
            } else {
                ageInYears = currentYear - userYears - 1;
            }

            // Calculating Age in Months
            var ageInMonths = null;
            if (currentMonth >= userMonth) {
                ageInMonths = currentMonth - userMonth;
            } else {
                ageInMonths = 12 - (userMonth - currentMonth);
            }

            // Calculating Age in Days
            var ageInDays = null;
            if (currentDay >= userDays) {
                ageInDays = currentDay - userDays;
            } else {
                var daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
                ageInDays = daysInPreviousMonth - (userDays - currentDay);
            }

            $('.reflect').css('display', 'none');
            //setYear
            var fiedYear = document.getElementById("age_year");
            fiedYear.textContent = ageInYears;
            //setMonth
            var fiedMonth = document.getElementById("age_month");
            fiedMonth.textContent = ageInMonths;
            //setYears
            var fiedDays = document.getElementById("age_day");
            fiedDays.textContent = ageInDays;
            $('.value').css('display', 'block');
        }
    })
})