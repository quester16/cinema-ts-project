import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookingApi = createApi({
	reducerPath: 'booking/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3/',
		headers: {
			Accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTgwY2UwNWEwOGUwNjQxMjY0YmVhNzAzNTQ2MzVkNCIsIm5iZiI6MTczNTQ2ODQyMS40MTY5OTk4LCJzdWIiOiI2NzcxMjU4NTc2OTg1MmYyOTAxMmZhYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RPUURmZYwY6hxqbf6MW--UqKpxJTgmnxzyCbOtRwmYU'
		}
	}),
	endpoints: builder => ({
		getPopular: builder.query<any, void>({
			query: () => ({
				url: 'person/popular?language=en-US',
				params: {
					page: 1
				}
			})
		})
	})
})

export const { useGetPopularQuery } = bookingApi
