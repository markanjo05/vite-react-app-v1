export type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	birthDate: string;
	gender: string;
	occupation: string;
	mobileNo: string;
};

// export type GetUsersRequestData = {
// 	pageSize

// };

export type GetUsersResponseData = {
	items: User[];
};
