import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function Graph(props) {
	const { data } = props;
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray='1 1' />
				<XAxis dataKey='date' />
				<YAxis />
				<Tooltip />
				<Legend className='legend' />
				<Bar dataKey='views' stackId='a' className='bar' fill='#8884d8' />
				<Bar dataKey='sales' stackId='a' className='bar' fill='#82ca9d' />
			</BarChart>
		</ResponsiveContainer>
	);
}

export default Graph;
