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

const App = () => <>
	<Navigation />

	<main className="bg-neutral-100 min-h-[calc(100vh-72px)] flex justify-center">	

		<article className='mx-[38px] flex flex-col gap-6 py-6 max-w-screen-xl w-full'>

			<Header content='Set Security Strategy'/>
			<Divider />
			<Tabs tabGroup={{tabs}}/>

		</article>

	</main>
</>

export default App;