import React from "react";
import cn from "classnames";

type DividerProps = {
    className?: string;
};

const Divider = ({className}: DividerProps) => {

    const dividerClassName = cn(
        "w-3/4 h-px bg-red-700 border-none",
        className
    );

    return <hr className={dividerClassName}/>;
};

export {Divider};
