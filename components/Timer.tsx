import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { PauseIcon, RefreshIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";

export default function Timer() {
	const [isPaused, setIsPaused] = useState(true);
	const [breakTime, setBreakTime] = useState(5);
	const [workTime, setWorkTime] = useState(10);
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
		<div className="h-screen">
			<div className="flex justify-center p-6">
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
			</div>
			<div className="flex justify-center space-x-12 p-6">
				<button onClick={() => setIsPaused(!isPaused)}>
					{isPaused ? (
						<PlayIcon className="transition ease-in-out text-aurapurple w-12 h-12 hover:text-aurapink duration-300" />
					) : (
						<PauseIcon className="transition ease-in-out text-aurapurple w-12 h-12 hover:text-aurapink duration-300" />
					)}
				</button>
				<button onClick={onReset}>
					<RefreshIcon className="transition ease-in-out text-aurapurple w-12 h-12 hover:text-aurapink duration-300" />
				</button>
			</div>
		</div>
	);
}
