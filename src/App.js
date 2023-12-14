import "./App.css";
import Main from "./Components/seatBooking/Main";
import { useState } from "react";
import { LuArmchair } from "react-icons/lu";

function App() {
	const [ticketType, setTicketType] = useState("Standard");
	const [quanityOfTicket, setQuantityOfTicker] = useState("");

	const ticketTypeHandler = (event) => {
		setTicketType(event.target.value);
	};

	const quantityHandler = (event) => {
		setQuantityOfTicker(event.target.value);
	};

	const clearStorage = () => {
		localStorage.clear();
		console.log("cleared");
	};

	return (
		<div className="main_container">
			<div className="main_container_inner">
				<div className="header">
					<h2>Book Your Tickets</h2>
				</div>

				<div className="App">
					<div className="left">
						<div className="dropdown">
							<label htmlFor="tickettype">Ticket Type:</label>
							<select id="tickettype" value={ticketType} onChange={ticketTypeHandler}>
								<option value="Standard">Standard</option>
								<option value="Premium">Premium</option>
							</select>

							<label htmlFor="qty">Ticket Quantity:</label>
							<select id="qty" value={quanityOfTicket} onChange={quantityHandler}>
								<option value="">Qty</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
						</div>
						<Main type={ticketType} quanityOfTicket={quanityOfTicket} />
					</div>
					<div className="right">
						<div>
							<h3>Key to Seat Layout:</h3>
							<ul>
								<li>
									<LuArmchair
										className="available seat"
										style={{ width: "35px", height: "35px" }}
									/>
									<p>Available</p>
								</li>

								<li>
									<LuArmchair className="unavailable size" />
									<p>Unavailable</p>
								</li>

								<li>
									<LuArmchair className="yourselection size" />
									<p>Your Selection</p>
								</li>

								<li>
									<LuArmchair className="premiumcolor size " />
									<p>Premium</p>
								</li>
							</ul>
						</div>
						<button onClick={clearStorage}>Clear Local Storage</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
