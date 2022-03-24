import { ReactChild, ReactChildren, ReactFragment, ReactPortal } from "react";

export interface Props {
    children: boolean | ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | ReactFragment | ReactPortal | null | undefined | any;
}

export default function Row(props: Props) {
    return (
        <div className="row align-items-center">{props.children}</div>
    )
}