import Page404 from "../Page404";
import Search from "../Search";
interface PrivateRouteProps {
    autorize: boolean
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ autorize }) => {
    console.log(autorize, "search")
    if (autorize) {
        return (
            <Search />
        )
    }
    return (
        <Page404 />
    )
};

export default PrivateRoute;