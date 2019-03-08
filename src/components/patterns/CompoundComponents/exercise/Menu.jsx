import React from "react";
import SideMenu from "react-burger-menu";

import withWidth, {
  LARGE
} from "../../HigherOrderComponents/exercise_2/withWidth";
import FloatingMenuBtn from "../../../FloatingMenuBtn";



const Menu = ({ isOpen, children, pageWrapId, width, toggleMenu }) => {
  
  // children = React.Children.map(this.props.children, (child) => (
  //   React.cloneElement(child, {
  //     isSelected: child.props.value === this.state.value,
  //     toggleMenu: () => togg)
  //   })
  // ))

  return (
    <div>
      {width === LARGE ? "" : <FloatingMenuBtn toggleMenu={toggleMenu} />}
      <SideMenu.slide
        disableCloseOnEsc
        isOpen={isOpen}
        pageWrapId={pageWrapId || "page-wrap"}
      >
        {children}
      </SideMenu.slide>
    </div>
  )
  };

export default withWidth(Menu);
