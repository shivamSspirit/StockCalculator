import React, { useState } from "react";
import "./stokecal.css";

function Stockcal() {
	const [initailStockvalue, setinitialStockValue] = useState(0);
	const [noofstocks, setNoofstocks] = useState(0);
	const [currentStockvalue, setcurrentStockvalue] = useState(0);

	const [profit, setProfit] = useState({ profitval: 0, profitper: 0 });
	const [Loss, setLoss] = useState({ lossval: 0, lossPer: 0 });

	console.log(`profit`, profit);
	console.log(`Loss`, Loss);

	const initialStockHandler = (e) => {
		setinitialStockValue(e.target.value);
	};

	const noofStockHandler = (e) => {
		setNoofstocks(e.target.value);
	};

	const currentStockvalHandler = (e) => {
		setcurrentStockvalue(e.target.value);
	};

	function calculateProfitAndLoss() {
		const current = Number(currentStockvalue);
		const initial = Number(initailStockvalue);
		const quantity = Number(noofstocks);

		if (current > initial) {
			let Profit = (current - initial) * quantity;
			let ProfitPer = (Profit / (initial * quantity)) * 100;
			setProfit({ profitval: Profit, profitper: ProfitPer.toFixed(2) });
		} else if (initial > current) {
			let Loss = (initial - current) * quantity;
			let LossPer = (Loss / (initial * quantity)) * 100;
			setLoss({ lossval: Loss, lossPer: LossPer.toFixed(2) });
		}
	}

	const CalcHandler = () => {
		calculateProfitAndLoss();
		settoggle(true);
	};
	return (
		<>
			<div className="head-stock">
				<h1>Where's my Stonks?</h1>
			</div>

			<div className="forms-input">
				<div className="forms-first-block">
					<label className="lableforinitialvalue" htmlFor="label">
						Enter initial stock value:
					</label>
					<input
						className="stockpriceinputvalue"
						value={initailStockvalue}
						onChange={initialStockHandler}
						type="number"
					/>
				</div>
				<div className="forms-second-block">
					<label className="lableforstockvalue" htmlFor="label">
						Enter no of stock:
					</label>
					<input
						className="stockinputvalue"
						value={noofstocks}
						onChange={noofStockHandler}
						type="number"
					/>
				</div>

				<div className="forms-third-block">
					<label className="lableforlastvalue" htmlFor="label">
						Enter current stock value:
					</label>
					<input
						className="currentinputvalue"
						value={currentStockvalue}
						onChange={currentStockvalHandler}
						type="number"
					/>
				</div>
			</div>

			<div>
				<button onClick={CalcHandler} className="calculate-btn-stock">
					Tell me
				</button>
			</div>

			<div className="result-val">
				{Loss.lossval &&
					Loss.lossPer &&
					`there is a loss of ${Loss.lossval} and loss percentage is ${Loss.lossPer}%`}

				<br />
				{profit.profitper &&
					profit.profitval &&
					`yaya there is a profit of ${profit.profitval} and profit percentage is ${profit.profitper}%`}
			</div>
		</>
	);
}

export default Stockcal;
