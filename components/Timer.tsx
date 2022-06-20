import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { PauseIcon, RefreshIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";

export default function Timer() {
	const [isPaused, setIsPaused] = useState(true);
	const [breakTime, setBreakTime] = useState(900);
	const [longBreakTime, setLongBreakTime] = useState(300);
	const [workTime, setWorkTime] = useState(1500);
	const [sessionTime, setSessionTime] = useState(workTime);
	const [key, setKey] = useState(0);
	const [isBreak, setIsBreak] = useState(false);
	const [workCycles, setWorkCycles] = useState(1); //real number of work cycles is workCycles - 1

	const onFinish = () => {
		if (!isBreak) {
			setWorkCycles(workCycles + 1);
			if (workCycles % 4 === 0 && workCycles !== 0) {
				setSessionTime(longBreakTime);
			} else {
				setSessionTime(breakTime);
			}
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

	//the type of remainingTime should be number according to documentation but...
	const countdown = ({ remainingTime }: any) => {
		const minutes = Math.floor(remainingTime / 60);
		const seconds = String(remainingTime % 60).padStart(2, "0");

		return (
			<div className="text-7xl font-medium subpixel-antialiased text-aurawhite font-mono">
				{minutes}:{seconds}
			</div>
		);
	};

	return (
		<div>
			<div className="flex justify-center p-4">
				<CountdownCircleTimer
					key={key}
					isPlaying={!isPaused}
					duration={sessionTime}
					colors={["#a277ff", "#f694ff", "#ffca85", "#ff6767"]}
					colorsTime={[10, 7, 5, 0]}
					size={512}
					trailColor="#15141b"
					onComplete={() => {
						onFinish();
					}}
				>
					{countdown}
				</CountdownCircleTimer>
			</div>
			<div className="flex justify-center space-x-12">
				<button onClick={() => setIsPaused(!isPaused)}>
					{isPaused ? (
						<PlayIcon className="transition ease-in-out text-aurapurple w-20 h-20 hover:text-aurapink duration-300" />
					) : (
						<PauseIcon className="transition ease-in-out text-aurapurple w-20 h-20 hover:text-aurapink duration-300" />
					)}
				</button>
				<button onClick={onReset}>
					<RefreshIcon className="transition ease-in-out text-aurapurple w-20 h-20 hover:text-aurapink duration-300" />
				</button>
			</div>
		</div>
	);
}
