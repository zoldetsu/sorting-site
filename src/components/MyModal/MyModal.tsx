import { ReactNode } from "react";
import classes from "./MyModel.module.css";

interface IMyModal {
  children: ReactNode;
  visible: boolean;
  setVisible: Function;
}
export default function MyModal({ children, visible, setVisible }: IMyModal) {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
