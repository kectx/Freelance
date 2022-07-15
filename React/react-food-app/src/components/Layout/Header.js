import React, { Fragment } from "react"

import classes from "./Header.module.css"

import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"

const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Food App</h1>
				<HeaderCartButton />
			</header>
			<div>
				<img
					className={classes["main-image"]}
					src={mealsImage}
					alt='A table full of delicious food!'
				/>
			</div>
		</Fragment>
	)
}

export default Header