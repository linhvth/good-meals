import React from "react";
import { Container } from "react-bootstrap";
import PreLoader from "../elements/PreLoader"

function Articles() {
    return (
        <div>
            <PreLoader />
            <Container className="py-5 my-3">
                Articles Page. Coming soon.
            </Container>
        </div>
    )
}

export default Articles