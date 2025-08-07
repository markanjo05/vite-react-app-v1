import data from "#data";

const getUsers = () => (_, res) => {
	try {
		setTimeout(() => {
			res.status(200).json({
				items: data.users,
			});
		}, 1500);
	} catch (error) {
		res.status(500).json({
			error: "Error occurred. Please try again",
		});
	}
};

export default getUsers;
