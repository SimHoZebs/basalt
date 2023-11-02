import React from "react";
import {
  useEditor,
  EditorContent,
  NodeViewWrapper,
  mergeAttributes,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CustomStarterKit from "./CustomStaterKit";

import { Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
const Component = () => (
  <NodeViewWrapper>
    <div>Helo</div>
  </NodeViewWrapper>
);

const Test = Node.create({
  // configuration …
  name: "test",
  group: "block",
  atom: true,

  addAttributes() {
    return {
      count: {
        default: 0,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "test",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["test", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});

const Editor = () => {
  const editor = useEditor({
    extensions: [CustomStarterKit, Test],
    content: `<p>Hello World!</p> 
    <test></test>`,
  });

  return <EditorContent editor={editor} />;
};

export default Editor;
