import "../styles/CommonCategory.css"

function CommonCategory(props) {
    return (
        <div className="Common-category-container">
            {props.contents}
        </div>
    );
}

export default CommonCategory;