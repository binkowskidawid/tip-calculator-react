import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import { changeTipAmount } from "./features/tipAmount";
import { changeTotalPerPerson } from "./features/totalPerPerson";

function App() {
	const [bill, setBill] = useState(0);
	const [percent, setPercent] = useState(0);
	const [people, setPeople] = useState(0);
	const [billValue, setBillValue] = useState("");
	const [customValue, setCustomValue] = useState("");
	const [peopleValue, setPeopleValue] = useState("");
	const [click, setClick] = useState(false);

	const dispatch = useDispatch();

	const resultTipAmount = () => {
		if (bill && percent && people !== 0) {
			dispatch(
				changeTipAmount(
					Math.round(((bill * percent) / people) * 100) / 100
				)
			);
		} else {
			dispatch(changeTipAmount(0));
		}
	};

	const resultTotal = () => {
		if (bill && people !== 0) {
			dispatch(
				changeTotalPerPerson(Math.round((bill / people) * 100) / 100)
			);
		} else {
			dispatch(changeTotalPerPerson(0));
		}
	};

	const reset = (e) => {
		setBill(0);
		setPercent(0);
		setPeople(0);
		setBillValue("");
		setCustomValue("");
		setPeopleValue("");
	};

	const tipAmount = useSelector((state) => state.tipAmount.value);
	const totalPerPerson = useSelector((state) => state.totalPerPerson.value);

	resultTipAmount();
	resultTotal();

	return (
		<div className="App">
			<header>
				<h1 className="flex flex-col items-center justify-center my-8 leading-6 tracking-widest font-bold text-2xl">
					<span>SPLI</span>
					<span>TTER</span>
				</h1>
			</header>
			<main className="rounded-t-3xl px-6 py-8">
				<form>
					<label className="flex flex-col text-lg font-bold">
						Bill
						<input
							type="number"
							placeholder="$"
							value={billValue}
							className="p-3 mb-6 text-3xl font-bold text-right rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
							onChange={(e) => {
								setBillValue(e.target.value);
								setBill(e.target.value);
							}}
						/>
					</label>
				</form>
				<div className="select-tip">
					<p className="text-lg font-bold pb-2">Select Tip %</p>
					<div className="tip-percent flex flex-wrap items-center justify-items-stretch justify-between">
						<button
							className="tip"
							value="0.05"
							onClick={(e) => {
								setPercent(parseFloat(e.target.value));
							}}
						>
							5%
						</button>
						<button
							className="tip"
							value="0.1"
							onClick={(e) =>
								setPercent(parseFloat(e.target.value))
							}
						>
							10%
						</button>
						<button
							className="tip"
							value="0.15"
							onClick={(e) =>
								setPercent(parseFloat(e.target.value))
							}
						>
							15%
						</button>
						<button
							className="tip"
							value="0.25"
							onClick={(e) =>
								setPercent(parseFloat(e.target.value))
							}
						>
							25%
						</button>
						<button
							className="tip"
							value="0.5"
							onClick={(e) =>
								setPercent(parseFloat(e.target.value))
							}
						>
							50%
						</button>
						<input
							type="number"
							min="0"
							max="100"
							value={customValue}
							placeholder="Custom %"
							className="tip p-3 mb-6 text-3xl font-bold text-right rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
							onChange={(e) => {
								setCustomValue(e.target.value);
								setPercent(parseFloat(e.target.value / 100));
							}}
						/>
					</div>
				</div>
				<form>
					<label className="flex flex-col text-lg font-bold">
						Number of People
						<input
							type="number"
							min="0"
							max="50"
							value={peopleValue}
							placeholder="*"
							className="p-3 mb-6 text-3xl font-bold text-right rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
							onChange={(e) => {
								setPeopleValue(e.target.value);
								setPeople(parseInt(e.target.value));
							}}
						/>
					</label>
				</form>
				<div className="results flex flex-col rounded-2xl p-6">
					<div className="tip-amount flex items-center justify-items-stretch justify-between mb-4">
						<div>
							<p className="text-white font-bold text-lg">
								Tip Amount
							</p>
							<p className="text-green-600 font-bold">/ person</p>
						</div>
						<div>
							<p className="sum text-4xl font-bold">
								${tipAmount.tipAmount}
							</p>
						</div>
					</div>
					<div className="tip-total-per-person flex items-center justify-items-stretch justify-between mb-4">
						<div>
							<p className="text-white font-bold text-lg">
								Total
							</p>
							<p className="text-green-600 font-bold">/ person</p>
						</div>
						<div>
							<p className="sum text-4xl font-bold">
								${totalPerPerson.totalPerPerson}
							</p>
						</div>
					</div>
					<button className="reset" onClick={reset}>
						RESET
					</button>
				</div>
			</main>
		</div>
	);
}

export default App;
