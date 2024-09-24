const button = document.getElementById('calculate');

const calculate = () => {
   
    const selectedWeight = document.getElementById('weight').value; // Hakee painon arvon
    const selectedIntensity = document.getElementById('intensity').value; // Hakee intensiteetin arvon
    const selectedGender = document.querySelector('input[name="gender"]:checked'); // Hakee valitun sukupuolen

    //console.log('Weight:', selectedWeight); // Näyttää painon arvon
    //console.log('Intensity:', selectedIntensity); // Näyttää intensiteetin arvon
    //console.log('Gender:', selectedGender.value); // Näyttää sukupuolen arvon tai viestin, jos ei ole valittu

    let calories = 0

    if (selectedGender.value == 'male') {
        calories = (879 + selectedWeight * 10.2) * selectedIntensity
    } else {
        calories = (795 + selectedWeight * 7.18) * selectedIntensity
    }

    const result = document.querySelector('output')
    result.innerHTML = calories.toFixed(0)

}

button.addEventListener('click', calculate)