import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import camp from "./assets/camp.jpg";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div
            style={{ width: "100", height: "1000", backgroundColor: "#FF0000" }}
            className="App"
        >
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            UM COS420 with React Hooks and TypeScript
                        </header>

                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            LOG HELLO WORLD
                        </Button>

                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Aiden McGlauflin. Hello
                            World!
                        </p>
                    </Col>
                    <Col>
                        <h2> Added header for textbook work! </h2>
                        <ul>
                            <li>Comfort</li>
                            <li>Relaxation</li>
                            <li>A Gorgeous View</li>
                            <li>TODO: downsize image</li>
                        </ul>
                    </Col>
                </Row>
                <img src={camp} alt="Image of my family's camp" />
            </Container>
        </div>
    );
}

export default App;
