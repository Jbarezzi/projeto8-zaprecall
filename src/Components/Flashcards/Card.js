import { Children } from "react/cjs/react.production.min";

export default function Card(props) {
    return (
        <div className="card">
            { props.children }
        </div>
    );
}