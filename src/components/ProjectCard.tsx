import { Typography } from "@material-tailwind/react";
import { ProjectData } from "../interfaces/app_interfaces";

interface ProjectCardProps {
	value: ProjectData;
}

const ProjectCard = ({ value }: ProjectCardProps) => {
	const { name, description, image, url } = value;

	return (
		<div
			className="w-96 rounded-lg h-80 relative bg-black text-black
            hover:scale-125 hover:z-10 transition-all border-2 border-gray-800"
			key={name + description}
			onClick={() => console.log(url)}
		>
			<img
				src={false ? image : "https://placehold.co/600x400"}
				className="absolute rounded-lg h-full w-full object-cover opacity-50"
			></img>
			<div className="absolute p-8 text-white">
				<Typography variant="lead" className="font-bold">
					{name}
				</Typography>
				<Typography variant="paragraph" color="blue-gray">
					12/02/2003
				</Typography>
				<Typography variant="paragraph">{description}</Typography>
			</div>
			<Typography variant="paragraph" className="bottom-4 absolute right-4">
				JS, C#, Python
			</Typography>
		</div>
	);
};

export default ProjectCard;
