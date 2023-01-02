import SyntaxHighlighter from "react-syntax-highlighter";
import {
    a11yLight,
    anOldHope,
    atomOneDark,
    atomOneLight,
    dracula,
    github, monokai, monokaiSublime
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import '../hojas_de_estilo/CodeBox.css'
import {androidstudio, xcode} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {duotoneLight, oneDark, oneLight} from "react-syntax-highlighter/dist/esm/styles/prism";
import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBox = ({code}) => {
    function getProps() {

    }

    return (
        <div className="codebox-container">
            <SyntaxHighlighter
                children={code}
                style={xcode}
                showLineNumbers={false}
                language={"javascript"}
                wrapLines={true}
                // lineProps={getProps}
            />
        </div>);
}

export default CodeBox;