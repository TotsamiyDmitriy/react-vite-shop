import { useAppSelector } from "../redux/hooks";

export default function useAuth() {
	const {email, token, id} = useAppSelector(({authReducer}) => authReducer.user)
	return({
		isAuth : !!email,
		email,
		token,
		id
	})
}