const form = document.querySelector("form")
// const height = parseInt(document.querySelector("#height")).value
// this will give a empty value

form.addEventListener("submit", function(e){
  e.preventDefault();  // ⭐⭐⭐⭐⭐ very imp : it is used to stop the refresh after submitting

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")
  const result2 = document.querySelector("#result2")

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`
  }
  else {
    let bmi = (weight / ((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span>bmi ${bmi}</span>`
    
    if (bmi < 18.6) {
      // Under Weight = Less than 18.6
      result2.innerHTML = `Under Weight`

    }
    else if ( bmi > 18.6 && bmi < 24.9) {
      // Normal Range = 18.6 and 24.9
      result2.innerHTML = `Normal Range`
    }
    else {
      // Overweight = Greater than 24.9
      result2.innerHTML = `Overweight`
    }
  }
})