import { Link } from "react-router-dom";
import img from '../../Resourses/error.png';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 bg-gray-900 text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<img src={img} alt="" />
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-secondary text-gray-900">Back to homepage</Link>
		</div>
	</div>
</section>
    );
};

export default ErrorPage;