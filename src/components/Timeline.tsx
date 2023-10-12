import Milestone from "./Timeline/Milestone";

const Timeline = () => {
	return (
		<div className="relative">
			<Milestone
				title="Blah Blah"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore eum consequuntur eos
						fuga assumenda esse. Qui soluta quo optio vel exercitationem expedita id?"
				points={[{ title: "OKEY", description: "BYE" }]}
			/>

			<Milestone
				title="Blah Blah"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore eum consequuntur eos
						fuga assumenda esse. Qui soluta quo optio vel exercitationem expedita id?"
				points={[{ title: "OKEY", description: "BYE" }]}
			/>
			<Milestone
				title="Blah Blah"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore eum consequuntur eos
						fuga assumenda esse. Qui soluta quo optio vel exercitationem expedita id?"
				points={[{ title: "OKEY", description: "BYE" }]}
			/>
		</div>
	);
};

export default Timeline;
