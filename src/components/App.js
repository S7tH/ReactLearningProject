import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import {useState} from "react";


function App() {

	const [cart, updateCart] = useState([])

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			 <Cart cart={cart} updateCart={updateCart}/>
			<ShoppingList cart={cart} updateCart={updateCart}/>
			< Footer />
		</div>
	)
}

export default App
