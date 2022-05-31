import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Timer from "../components/Timer";
import Stats from "../components/Stats";
import Settings from "../components/Settings";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>My Pomodoro</title>
				<meta name="description" content="Best Pomodoro App!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-aurablack">
				<Timer />
			</main>
		</div>
	);
};

export default Home;
