import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer() {
	const [isPaused, setIsPaused] = useState(true);
	const [breakTime, setBreakTime] = useState(300);
	const [workTime, setWorkTime] = useState(1500);
	const [sessionTime, setSessionTime] = useState(workTime);
	const [key, setKey] = useState(0);
	const [isBreak, setIsBreak] = useState(false);

	const onFinish = () => {
		if (!isBreak) {
			setSessionTime(breakTime);
			setIsBreak(true);
			setIsPaused(false);
			setKey(key + 1);
		} else {
			setSessionTime(workTime);
			setIsBreak(false);
			setIsPaused(true);
			setKey(key + 1);
		}
	};

	const onReset = () => {
		setIsPaused(true);
		setSessionTime(workTime);
		setKey(key + 1);
	};

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
				key={key}
				isPlaying={!isPaused}
				duration={sessionTime}
				colors={["#a277ff", "#f694ff", "#ffca85", "#ff6767"]}
				colorsTime={[10, 7, 5, 0]}
				size={300}
				trailColor="#15141b"
				onComplete={() => {
					onFinish();
				}}
			>
				{countdown}
			</CountdownCircleTimer>
			<button
				className="text-aurawhite bg-aurablack hover:bg-aurablue-dark font-bold py-2 px-4 rounded-full"
				onClick={() => setIsPaused(!isPaused)}
			>
				{isPaused ? "Start" : "Pause"}
			</button>
			<button
				className="text-aurawhite bg-aurablack hover:bg-aurablue-dark font-bold py-2 px-4 rounded-full"
				onClick={onReset}
			>
				Reset
			</button>
		</div>
	);
}
