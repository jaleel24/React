import './Card.css';
function Card(props){
    /* //props.children is a builten prop which will help make us a wrapper like card and anything inside that will
    // will have the same style as coded in Card.css ,
     helps us in composition
 */
    const classes = 'card ' + props.className;
    return <div className={classes}>
        {props.children}
    </div>
}
export default Card;