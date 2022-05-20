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

			<main>
				<Tab.Group>
					<Tab.List className="flex place-content-evenly space-x-1 rounded-xl bg-blue-900/20 p-1">
						<Tab className="">Stats</Tab>
						<Tab className="">Timer</Tab>
						<Tab className="">Settings</Tab>
					</Tab.List>
					<Tab.Panels>
						<Tab.Panel>
							<Stats />
						</Tab.Panel>
						<Tab.Panel>
							<Timer />
						</Tab.Panel>
						<Tab.Panel>
							<Settings />
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</main>
		</div>
	);
};

export default Home;
