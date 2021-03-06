import Image from "next/image";

type Prop = {
	src: string;
	handleClick: Function;
	rotate?: number;
	disabled?: boolean;
};
export const ButtonWithIcon = ({
	src,
	handleClick,
	rotate = 0,
	disabled = false,
}: Prop) => {
	return (
		<>
			<button
				className="rotateX"
				onClick={() => handleClick()}
				disabled={disabled}
			>
				<Image src={src} width={30} height={30} />
			</button>
			<style jsx>{`
				button {
					display: flex;
					align-items: center;
					justify-content: center;
					background: #032d5fff;
					border: none;
					border-radius: 0.5rem;
					width: 2rem;
					height: 2rem;
					cursor: pointer;
					transform: rotate(${rotate + "deg"});
				}
			`}</style>
		</>
	);
};
