import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Timer from "../components/Timer";
import Stats from "../components/Stats";
import Settings from "../components/Settings";
import List from "../components/List";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>My Pomodoro</title>
				<meta name="description" content="Best Pomodoro App!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-aurablack min-h-screen">
				<h1 className="flex justify-center text-6xl p-6 font-mono">
					<button className="transition ease-in-out text-aurawhite hover:text-aurapink">
						Pomo
					</button>
					<button className="transition ease-in-out text-aurawhite hover:text-auragreen">
						list
					</button>
				</h1>
				<div className="grid grid-cols-2 gap-2">
					<Timer />
					<List />
				</div>
			</main>
		</div>
	);
};

export default Home;
