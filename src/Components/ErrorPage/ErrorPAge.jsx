import { useRouteError } from "react-router-dom";


const ErrorPAge = () => {
    const error=useRouteError()
    return (
        <div className="flex items-center justify-center text-center ">
            <div>
            <h2 className="text-4xl text-bold text-red-600">Opps! Sorry</h2>
            <p className="text-sm">An unexpected error Occured</p>
            </div>
            {
                error&&(
                    <p>
                      <i>{error.statusText || error.message}</i>
                    </p>
                )
            }
        </div>
    );
};

export default ErrorPAge;