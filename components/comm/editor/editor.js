import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
import { Fragment } from "react";

const EditorCK = ({ data, onChange }) => {
  return (
    <div id="archeve-ckeditor">
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          const data2 = editor.getData();
          onChange(data2);
        }}
      />
    </div>
  );
};

export default EditorCK;
