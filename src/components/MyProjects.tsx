import ProjectCard from "./ProjectCard";
import { ProjectData } from "../interfaces/app_interfaces";

const MyProjects = () => {
	const projectData: Array<ProjectData> = [
		{
			name: "TEST",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptatem pariatur soluta.",
		},
		{
			name: "TEST1",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptatem pariatur soluta.",
		},
		{
			name: "TEST2",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptatem pariatur soluta.",
		},
		{
			name: "TEST3",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptatem pariatur soluta.",
		},
		{
			name: "TEST1",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptatem pariatur soluta.",
		},
		{
			name: "TEST2",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptatem pariatur soluta.",
		},
		{
			name: "TEST3",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptatem pariatur soluta.",
		},
	];

	return (
		<div className="flex flex-wrap mx-8 gap-4 mb-8">
			{projectData.map((value) => (
				<ProjectCard value={value} />
			))}
		</div>
	);
};

export default MyProjects;
