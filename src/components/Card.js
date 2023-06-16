import { Link } from 'react-router-dom';


export function Card(props) {
	return (
		<div className='card-container'>
		    <Link to={`housing/` + props.house.id} className="card-layout" key={props.house.id}>
			<img className='card-cover' src={props.house.cover} alt="" />
			<h2>{props.house.title}</h2>
		    </Link>
		</div>
	    );
}
