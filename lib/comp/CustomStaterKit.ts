import StarterKit from "@tiptap/starter-kit";
import { StarterKitOptions } from "@tiptap/starter-kit";
import { Extension } from "@tiptap/core";

const CustomStarterKit: Extension<StarterKitOptions> = StarterKit.configure({
  paragraph: {
    HTMLAttributes: {
      class: "bg-red-200",
    },
  },
});

export default CustomStarterKit;
