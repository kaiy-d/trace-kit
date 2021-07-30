import React from 'react';
import { render } from "react-dom";
import { TRCButton, TRCInput, TRCToggle } from "./lib";

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <h1>Trace Kit</h1>
        <h2>Form Components</h2>
        <div>
            <h3>Buttons</h3>
            <TRCButton>Primary Button</TRCButton>
            <TRCButton ghost>Primary Ghost Button</TRCButton>
            <TRCButton whoops>Primary Whoops Button</TRCButton>
            <TRCButton disabled>Primary Disabled Button</TRCButton>

            <TRCButton secondary>Secondary Button</TRCButton>
            <TRCButton secondary ghost>Secondary Ghost Button</TRCButton>
            <TRCButton secondary whoops>Secondary Danger Button</TRCButton>
            <TRCButton secondary disabled>Secondary Disabled Button</TRCButton>

            <TRCButton full>Full Width Standard Button</TRCButton>
        </div>

        <hr/>
    </div>
)

render(<App />, document.getElementById("root"));
