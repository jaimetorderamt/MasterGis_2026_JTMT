const bisiesto = 2020

if (bisiesto % 4 === 0) {

  // Lo que salga TRUE

  if (bisiesto % 100 === 0) {

    if (bisiesto % 400 === 0) {

      console.log(`El año ${bisiesto} es bisiesto 🥳🥳`)

    } else {

      console.log(`El año ${bisiesto} no es bisiesto`)

    }

  } else {

    console.log(`El año ${bisiesto} es bisiesto 🥳🥳`)

  }


} else {

  // Lo que salga FALSE

  console.log(`El año ${bisiesto} no es bisiesto`)

}