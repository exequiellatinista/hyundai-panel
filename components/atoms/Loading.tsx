type Prop = {
	size?: string;
};
export const Loading = ({ size = "2rem" }: Prop) => {
	return (
		<>
			<div></div>
			<style jsx>
				{`
					div {
						position: absolute;
						border: 4px solid rgba(0, 0, 0, 0.1);
						width: ${size};
						height: ${size};
						border-radius: 50%;
						border-left-color: #09f;

						animation: spin 1s ease infinite;
					}

					@keyframes spin {
						0% {
							transform: rotate(0deg);
						}

						100% {
							transform: rotate(360deg);
						}
					}
				`}
			</style>
		</>
	);
};