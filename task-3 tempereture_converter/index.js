const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

   
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    const kelToCel = (kelc) => {   
        let celsius1 = (kelc - 273.15).toFixed(1);
        return celsius1;
     }
    const ketTofah = (kelf) => {
        let fahrenheit1 = ((kelf - 273.15) * 9 / 5 + 32).toFixed(1);
        return fahrenheit1;
    }
     


    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else if(valueTemp == 'fah') {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";

    }
    else if (valueTemp == 'kelf') {
        document.getElementById("result").innerHTML = ketTofah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = kelToCel(inputTemp) + "&#176; Celsius";
    }
}