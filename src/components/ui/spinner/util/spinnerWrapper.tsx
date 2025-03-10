import { useLoading } from "../../../../context/useLoading";
import Spinner from "../Spinner";

// Hiển thị Spinner khi `loading` là `true`
const SpinnerWrapper = () => {
    const { loading } = useLoading();
    return loading ? <Spinner /> : null;
};
export default SpinnerWrapper