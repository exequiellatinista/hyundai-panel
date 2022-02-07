import Image from "next/image";

type Prop = {
	src: string;
};
export const ButtonWithIcon = ({ src }: Prop) => {
	return (
		<>
			<button>
				<Image src={src} width={30} height={30} />
			</button>
			<style jsx>{`
				button {
					display: flex;
					align-items: center;
					justify-content: center;
					background: #e6e9ee;
					border: none;
				}
			`}</style>
		</>
	);
};