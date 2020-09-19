import React from 'react';
import Serdata from './Serdata';
import Card from './Card';

const Practservices = () => {
	return(
		<>
			<div className="my-5" >
				<h1 className="text-center" > Our Services </h1>
			</div>
		<div className="container-fluid mb-5">
			<div className="row">
				<div className="col-10 mx-auto" >
					<div className="row gy-4" >
						
					{
						Serdata.map((val,index) => {
							return <Card key={index} imgsrc={val.imgsrc} title={val.title} />
						})
					}

					</div>
				</div>
			</div>
		</div>
		</>
		);
}
export default Practservices;