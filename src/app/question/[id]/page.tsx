import Link from "next/link";

interface QuestionPageProps {
	params: {
		id: string;
	};
}

export default async function QuestionPage({ params }: QuestionPageProps) {
	return (
		<div>
			<Link href={`/question/`}>Continuar</Link>
		</div>
	);
}