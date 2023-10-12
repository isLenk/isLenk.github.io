import { Button } from "@material-tailwind/react";

const Navbar = () => {
	return (
		<div className="flex justify-center gap-8">
			<Button variant="text">Github</Button>
			<Button variant="text">Resume</Button>
			<Button variant="text">Contact</Button>
		</div>
	);
};

export default Navbar;
