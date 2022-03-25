const changeURL = () => {
	let path = window.location.pathname
	console.log(path)
	if (path === "/Project1/index.html") {
		window.history.pushState(
			null,
			null,
			"?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da"
		)
	} else if (path === "/Project1/ws1.html") {
		window.history.pushState(
			null,
			null,
			"#przejscie?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da".replace(
				"utm_campaign=Lato",
				"utm_campaign=Zima"
			)
		)
	} else if (path === "/Project1/ws2.html") {
		href = window.location.href
	}
}

function calcBMI(weight, height) {
	let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2)
	if (bmi <= 18.5) {
		console.log("Niedowaga")
	} else if (bmi <= 25 && bmi > 18.5) {
		console.log("Wartość prawidłowa")
	} else {
		console.log("Nadwaga")
	}

	return bmi
}
changeURL()
calcBMI(95, 190)

//////////////////////////////////////////
/////////////////////////////////////////

// let href = window.location.href
// window.addEventListener("onload", (href) => {
// 	console.log(href)
// 	if (href === "Project1/index.html") {
// 		window.history.pushState(
// 			"",
// 			"",
// 			"?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da"
// 		)
// 	} else if (href === "Project/ws1.html") {
// 		window.history.pushState(
// 			null,
// 			null,
// 			"?przejscie?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Zima&utm_id=MateuszGr%C4%99da"
// 		)
// 	} else if (href === "Project/ws2.html") {
// 		href = window.location.href
// 	}
// })

//
