import React, { Fragment } from 'react';

import ExternalLink from './ExternalLink';
import Profile from './Profile';

const Contact = () => {
	return (
		<Fragment>
			<div className="container">
				<h1><strong>Check out the Library!</strong></h1>
				<div className="row">
						<div className="col-sm-6 text-center">
							<img
								alt=""
								className="site-logo center-block img-responsive"
								src="/github-logo.png"
							/>
							<br/>
							<ExternalLink
								className="btn btn-lg btn-info btn-go"
								href="https://github.com/DeThread/dethread"
							>
								Go to Github!
							</ExternalLink>
						</div>
						<div className="col-sm-6 text-center">
							<img
								alt=""
								className="site-logo center-block img-responsive"
								src="/npm.png"
							/>
							<br/>
							<ExternalLink
								className="btn btn-lg btn-info btn-go"
								href="https://www.npmjs.com/package/dethread"
							>
								Go to NPM!
							</ExternalLink>
						</div>
					</div>
				<br/>
				<hr/>
				<h2>Created By</h2>
				<br/>
				<div className="row">
					<Profile
						imgSrc="/bryan.jpg"
						name="Bryan Yee"
						urls={{
							github: 'https://github.com/bryanyee',
							linkedin: 'https://www.linkedin.com/in/bryan-yee',
						}}
					/>
					<Profile
						imgSrc="/daniel.jpg"
						name="Daniel Lao"
						urls={{
							github: 'https://github.com/Dlaosb',
							linkedin: 'https://www.linkedin.com/in/dalao',
						}}
					/>
					<Profile
						imgSrc="/shawn.jpg"
						name="Shawn Southwell"
						urls={{
							github: 'https://github.com/shawn-southwell',
							linkedin: 'https://www.linkedin.com/in/shawn-southwell',
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Contact;
