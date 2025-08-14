import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import type { GetUsersResponseData } from "@/shared/types/user";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery,
	endpoints: (builder) => ({
		getUsers: builder.query<GetUsersResponseData, void>({
			query: () => `users`,
		}),
	}),
});

export const { useGetUsersQuery } = usersApi;
