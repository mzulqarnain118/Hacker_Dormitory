import React from 'react';

function ResidentsList({residentsList}) {
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
			{residentsList.map(data=><li key="item1" className="slide-up-fade-in">
					{data?.name}
				</li>)}
			</ul>
		</div>
	);
}

export default ResidentsList;
