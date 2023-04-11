import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CustomStarterKit from "./CustomStaterKit";

import { Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

const Component = () => <div>Test</div>;

const Test = Node.create({
  // configuration …

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});

const Editor = () => {
  const editor = useEditor({
    extensions: [CustomStarterKit],
    content: "<p>Hello World!</p>",
  });
  return <EditorContent editor={editor} />;
};

export default Editor;
