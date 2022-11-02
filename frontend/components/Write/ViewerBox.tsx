import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

const test = `# markdown`;

const ViewerBox = () => {
  return <Viewer initialValue={test} plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />;
};

export default ViewerBox;