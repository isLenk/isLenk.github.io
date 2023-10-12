import { Typography, Tooltip } from "@material-tailwind/react";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<>
			<Typography variant="h1" className="text-black/30 pl-4 ">
				I AM{" "}
				<Tooltip content="hello c:">
					<span className="text-black underline decoration-wavy decoration-red-800">LANCE</span>
				</Tooltip>
			</Typography>

			<div className="inline-flex gap-2">
				<Typography>
					<span className="text-pink-500">const</span> I_WORK_FOR =
				</Typography>
				<Tooltip content="Cannot find name 'COMPANY_NAME'. ts(2304)">
					<span className="text-black underline decoration-wavy decoration-red-800 uppercase">
						COMPANY_NAME
					</span>
				</Tooltip>
			</div>
			<Navbar />
		</>
	);
};

export default Header;
