import { useState } from 'react'
import '../styles/Cart.css'


export function addToCart(cart, updateCart, name, price) {
	const currentPlantSaved = cart.find((plant) => plant.name === name)
	if (currentPlantSaved) {
		const cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
		)
		updateCart([
			...cartFilteredCurrentPlant,
			{ name, price, amount: currentPlantSaved.amount + 1 }
		])
	} else {
		updateCart([...cart, { name, price, amount: 1 }])
	}
}

function removeToCart(cart, updateCart, name, price) {

	const currentPlantSToRemove = cart.find((plant) => plant.name === name)

	if (currentPlantSToRemove) {
		const cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
		)

		if(currentPlantSToRemove.amount === 1) {
			updateCart([...cartFilteredCurrentPlant])
		} else {
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSToRemove.amount - 1 }
			])
		}

	}
}

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								<div>
									{name} {price}€ x {amount}
								</div>
								<div>
								<button onClick={() => addToCart(cart, updateCart, name, price)}>+1</button> / <button onClick={() => removeToCart(cart, updateCart, name, price)}>-1</button>
								</div>
								-----------------
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart