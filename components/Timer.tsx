import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer() {
	const countdown = ({ remainingTime }: any) => {
		const minutes = Math.floor(remainingTime / 60);
		const seconds = String(remainingTime % 60).padStart(2, "0");

		return (
			<div className="text-3xl font-medium subpixel-antialiased text-aurawhite">
				{minutes}:{seconds}
			</div>
		);
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<CountdownCircleTimer
				isPlaying
				duration={1500}
				colors={["#a277ff", "#f694ff", "#ffca85", "#ff6767"]}
				colorsTime={[10, 7, 5, 0]}
				size={300}
				trailColor="#15141b"
			>
				{countdown}
			</CountdownCircleTimer>
		</div>
	);
}
