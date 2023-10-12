import { Typography } from "@material-tailwind/react";

interface MilestonePoints {
	title: string;
	description: string;
}

interface MilestoneProps {
	title: string;
	description: string;
	points: Array<MilestonePoints>;
}

const Milestone = ({ title, description }: MilestoneProps) => {
	return (
		<div className="min-h-[30vh]">
			<div className="w-full inline-flex gap-4 relative">
				<img
					alt="BABY GRAPHIC"
					src="https://placehold.co/300x200"
					className="object-cover w-32 h-32 rounded-full z-10"
				></img>

				<div className="">
					<Typography variant="h3">{title}</Typography>
					<Typography variant="paragraph">
						{/* Unfortunately not much was going on during this period of time. I think it's because my brain
            couldn't even comprehend that the toothfairy was not real. At this point I was addicted to
            Roblox and would bundle together open-source code written by others and naively hope that they
            work together like puzzle pieces. */}
						{description}
					</Typography>
				</div>
			</div>
			<hr className="h-full absolute border-gray-600 border-4 rounded-lg ml-16 " />

			<div className="ml-40">
				<Typography>WE PUT STUFF HERE</Typography>
			</div>
		</div>
	);
};

export default Milestone;
