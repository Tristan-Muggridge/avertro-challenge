import './App.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Divider from './components/Divider';
import { Tab } from './types';
import Objectives from './components/Objectives';

const tabs: Tab[] = [
	{
		heading: "Mission & Vision",
		content: <div className='text-center font-bold'> To be implemented! </div>
	},
	{
		heading: "Strategic Business Objectives",
		content: 
		<>
			<Objectives />
		</>
	},
]

export default () => {	
	return (
		<>
			<Navigation />
			
			<main className="bg-neutral-100 min-h-[calc(100vh-72px)]">	
			
				<article className='mx-[38px] flex flex-col gap-6 py-6 xl:max-w-screen-xl xl:mx-auto'>

					<Header content='Set Security Strategy'/>
					<Divider />
					<Tabs tabGroup={{tabs}}/>

				</article>
			
			</main>
		</>
  	);
}