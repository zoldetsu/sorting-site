import classes from "./InputSrction.module.css"

export default function InputSection(props) {
    return (
        <input className={classes.MyInput} {...props}/>
    )
}