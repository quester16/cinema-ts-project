import { configureStore } from '@reduxjs/toolkit'
import { bookingApi } from './api/booking.api.ts'

const store = configureStore({
	reducer: {
		[bookingApi.reducerPath]: bookingApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(bookingApi.middleware)
})

export default store
