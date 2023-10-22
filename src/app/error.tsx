"use client";

import {Button} from "react-bootstrap";

interface ErrorPageProps {
    error : Error,
    reset : () => void
}

export default function error({error,reset} : ErrorPageProps) {
    return(
        <div>
            <h1>Might be an error occur please wait </h1>
            <Button onClick={reset}>Try Again</Button>
        </div>
    );
}