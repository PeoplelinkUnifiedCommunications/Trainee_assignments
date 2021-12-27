import "./index.css";

const ListView = props => {
	const { eachData } = props;
	const { name, email, username } = eachData;
	return (
		<li className="list-item1">
			<h1 className="heading">{name}</h1>
			<h1 className="heading">{email}</h1>
			<h1 className="heading">{username}</h1>
		</li>
	);
};

export default ListView;
