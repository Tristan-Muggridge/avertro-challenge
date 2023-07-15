import './App.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Divider from './components/Divider';

const tabs = [
	{
		heading: "Mission & Vision",
		content: <>m&v</>
	},
	{
		heading: "Strategic Business Objectives",
		content: <>sbo</>
	},

]

export default () => {
	return (
		<>
			<Navigation />
			
			<main className="bg-neutral-100 min-h-[calc(100vh-72px)]">	
			
				<article className='mx-[38px] flex flex-col gap-6 py-6  xl:max-w-screen-xl xl:mx-auto'>

					<Header content='Set Security Strategy'/>
					<Divider />
					<Tabs tabGroup={{tabs}}/>

				</article>
			
			</main>
		</>
  	);
}