import { Button, Typography } from "@material-tailwind/react";
import MyProjects from "./components/MyProjects";
import Header from "./components/Header";
// import Timeline from "./components/Timeline";

function App() {
	return (
		<>
			<div className="bg-black text-white pl-2 sticky top-0 z-20 ">
				<Typography>WORK IN PROGRESS...</Typography>
			</div>
			<Header />
			<div className="w-screen h-[80vh] bg-black text-white flex flex-col justify-center items-center">
				<Typography
					variant="lead"
					className="w-2/3 break-words first-line:uppercase first-line:tracking-widest
        first-letter:text-7xl first-letter:font-bold first-letter:text-white
        first-letter:mr-3 first-letter:float-left"
				>
					Welcome, you have reached my wonderful page of{" "}
					<span className="bg-blue-500">projects and randomness</span>!
					<br /> This page was created as an outlet to help deal with my need to make something every once and
					a while. Feel free to scroll around and view an assortment of projects that I have created over my
					computer science journey!
				</Typography>

				<Button color="white" variant="outlined" className="mt-8">
					CONTACT ME
				</Button>
			</div>
			<div className="mx-8">
				<Typography variant="h1" className="uppercase">
					ABOUT ME
				</Typography>
				<Typography variant="paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet expedita culpa sint quae quo
					repellendus laudantium dicta quis, consectetur quidem inventore omnis illum iusto facilis vel eius
					delectus sequi voluptatum maxime!
				</Typography>
				<hr className="h-[30vh]" />

				<Typography variant="h1" className="uppercase">
					My <span className="text-gray-500">(PUBLIC)</span> Projects
				</Typography>
				<Typography variant="lead" className="underline text-red-600 ">
					View All on my Github
				</Typography>
				<MyProjects />

				{/* OKEY */}
				{/* <Typography variant="h1" className="uppercase">
					TIMELINE + PROJECTS
				</Typography>
				<Typography variant="lead">Heres a weird timeline</Typography>
				<br></br>
				<Timeline /> */}
			</div>
			<footer className="bg-black p-4 mt-4 h-24 text-white">
				<Typography variant="lead">Yron Lance Talban</Typography>
			</footer>
		</>
	);
}

export default App;
