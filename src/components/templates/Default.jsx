import React from "react";

import AppHeader from "../organisms/AppHeader";
import AppFooter from "../organisms/AppFooter";

export default function Default(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <AppHeader setOpen={setOpen} />
            {props.children}
            <AppFooter />
        </div>
    );
}
