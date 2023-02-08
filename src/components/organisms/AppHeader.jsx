import React from "react";
import DrawerMenu from "../molecules/DrawerMenu";

export default function AppHeader(props) {
    const [open, setOpen] = React.useState(false);
    return (
        <header>
            <DrawerMenu open={open} setOpen={setOpen} />
        </header>
    );
}
