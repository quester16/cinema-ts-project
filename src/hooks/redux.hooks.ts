import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import store from '../redux/store.ts'

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<typeof store.getState> =
	useSelector
