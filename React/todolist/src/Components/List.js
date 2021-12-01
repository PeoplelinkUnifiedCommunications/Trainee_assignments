import "./list.css";
function List (props) {
    return (
    <div>
        {props.itemList.map(itemObj => {
           return (
            <div className = "Item">
            <p>{itemObj.item}</p>
            </div>

           );

        })}
    </div>
    );
        

}
export default List;