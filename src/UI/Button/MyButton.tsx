
import classes from "./MyButton.module.css"

export default function MyButton({children, ...props}) {
    return (
        <button className={classes.myButton} {...props}>{children}</button>
    )
}