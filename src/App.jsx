import Editor from '@monaco-editor/react'
import './App.css'
import { useRef } from 'react'
import * as Y from 'yjs'
import {WebrtcProvider} from 'y-webrtc';
import {MonacoBinding} from 'y-monaco';


function App() {
  const editorRef = useRef(null);
  function handleEditorDidMount(editor,monaco){
    editorRef.current = editor;
    const doc = new Y.Doc();
    const type = doc.getText('monaco');
    const provider = new WebrtcProvider('test-room',doc) ;
    const binding = new MonacoBinding(type,editorRef.current.getModel(),new Set([editorRef.current]),provider.awareness);
  }
  return (
    <>
      <Editor
      width={"100vw"}
      height={"100vh"}
      theme='vs-dark'
      onMount={handleEditorDidMount}
      ></Editor>
    </>
  )
}

export default App
