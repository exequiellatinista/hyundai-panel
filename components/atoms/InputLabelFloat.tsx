import { useState } from "react";

type Prop = {
	children: string;
	name: string;
	type: string;
	width?: string;
	required?: boolean;
	disabled?: boolean;
	autoFocus?: boolean;
	autoComplete?: "nope" | "on";
	value?: string | number;
};

export const InputLabelFloat = ({
	children,
	name,
	type,
	width = "26rem",
	required = false,
	disabled = false,
	autoFocus = false,
	autoComplete = "nope",
	value,
}: Prop) => {
	const [mode, setMode] = useState(value ? true : false);
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value ? setMode(true) : setMode(false);
	};

	return (
		<>
			<div className="labelInput">
				<input
					type={type}
					name={name}
					className="inputLogin"
					required={required}
					disabled={disabled}
					autoFocus={autoFocus}
					onChange={handleInput}
					autoComplete={autoComplete}
					value={value && value}
				/>
				<label
					htmlFor={"name"}
					className={!mode ? "floatLabel" : "staticLabel"}
				>
					{children}
				</label>
			</div>
			<style jsx>
				{`
					.labelInput {
						display: flex;
						align-items: center;
						position: relative;
						min-width: 10rem;
						margin-bottom: 1rem;
						gap: 1rem;
						z-index: 1;
					}

					.labelInput:hover input {
						border: solid 1px black;
					}

					.inputLogin:focus ~ .floatLabel {
						transform: translate(0, -1.5rem);
						background: white;
						font-size: 0.9rem;
						z-index: 1;
					}

					.staticLabel {
						transform: translate(0, -1.5rem);
						background: white;
						font-size: 0.9rem;
						z-index: 1;
					}

					label {
						user-select: none;
						z-index: -1;
						transition: all 0.1s ease-out;
						position: absolute;
						left: 1rem;
						color: rgba(0, 0, 0, 0.6);
						padding: 0 0.5rem;
					}

					input {
						border: solid 1px #d9dce0;
						padding: 0.5rem;
						border-radius: 0.3rem;
						min-width: ${width};
						padding: 1rem;
						background: transparent;
					}
				`}
			</style>
		</>
	);
};
