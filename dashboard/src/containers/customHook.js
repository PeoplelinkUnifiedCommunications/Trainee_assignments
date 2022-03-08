import axios from "axios";
import { useState, useEffect } from "react";

const apiStatusConstants = {
	initial: "INITIAL",
	success: "SUCCESS",
	failure: "FAILURE",
	inProgress: "IN_PROGRESS",
};

const useCallApi = (url, method) => {
	const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
	const [apiData, setApiData] = useState({});
	const [error, setError] = useState(null);

	const fetchData = async () => {
		setApiStatus(apiStatusConstants.inProgress);
		try {
			const res = await axios({
				method: method,
				url: url,
			});
			setTimeout(
				() => (setApiData(res.data), setApiStatus(apiStatusConstants.success)),
				1000
			);
		} catch (error) {
			setTimeout(
				() => (
					setApiStatus(apiStatusConstants.failure), setError(error.message)
				),
				1000
			);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { apiData, apiStatus, error, fetchData };
};

export default useCallApi;
