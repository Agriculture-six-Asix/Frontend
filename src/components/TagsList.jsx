import { Link } from "react-router-dom";
// import Tags from "../data/dummy/tags.json";
import PropTypes from "prop-types";

function TagsList(props) {
    return (
        <div className="flex flex-wrap gap-2">
            {props.tags && props.tags.map((value, index) => (
                <Link 
                    to={{
                        pathname: "/forum",
                        search: `?tag=${encodeURIComponent(value.name.toLowerCase().replace(" ", "+"))}`
                    }}
                    key={index} 
                    className="text-sm border-[1px] border-gray-300 rounded-md p-2 transition-colors hover:bg-primaryColor hover:text-white"
                >
                    {value.name}
                </Link>
            ))}
        </div>
    )
};

TagsList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string
    }))
}

export default TagsList;