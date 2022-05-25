import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer() {
	const children = ({ remainingTime }: any) => {
		const minutes = Math.floor(remainingTime / 60);
		const seconds = String(remainingTime % 60).padStart(2, "0");

		return `${minutes}:${seconds}`;
	};

	return (
		<CountdownCircleTimer
			isPlaying
			duration={1500}
			colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
			colorsTime={[7, 5, 2, 0]}
		>
			{children}
		</CountdownCircleTimer>
	);
}
