interface HomeCardProps {
	title: string;
	description: string;
	btn: string | null;
	btnLink: string | null;
}

export default function HomeCard({
	title,
	description,
	btn,
	btnLink,
}: HomeCardProps) {
	return (
		<div
			className="homecard max-w-2xl space-y-5 font-arial mx-auto text-background bg-foreground/20 
						rounded-xl p-10 backdrop-filter backdrop-blur-lg shadow-lg shadow-black/50 hover:shadow-black 
						transition-all duration-300 text-center"
		>
			<h2 className=" text-2xl text-center font-arial font-semibold">
				{title}
			</h2>
			<p className="text-l font-normal font-arial">{description}</p>
			{btn && btnLink && (
				<a
					className="btn glass hover:bg-foreground/20 text-l text-background"
					href={btnLink}
				>
					{btn}
				</a>
			)}
		</div>
	);
}
