import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home: React.FC = () => {
	const loggedIn = {firstName: 'Adrian', lastName:"JSM",email:"contact@sdjd.com" };


  return (
	<section className='home'>
		<div className='home-content'>
			<header className='home-header'>
				<HeaderBox 
				type="greeting"
				title="Welcome"
				user={loggedIn?.firstName || 'Guest'}
				subtext="Access and manage your account and transactions efficiently."
				/>
				<TotalBalanceBox 
				accounts={[]}
				totalBanks={1}
				totalCurrentBalance={1250.35}

				/>
			</header>
			RECENT TRANSACTİONS
		</div>
		<RightSidebar user={loggedIn}
		transactions={[]}
		banks={[{currentBalance:123.50},{currentBalance:213.50}]} />
	</section>
  );
};

export default Home;