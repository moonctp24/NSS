/**
 * editor 파일을 js가 아니라 tsx로 작성했을 때, 필요한 파일
 */

declare module "@ckeditor/ckeditor5-react" {
  const CKEditor: any;

  export = CKEditor;
}

declare module "ckeditor5-custom-build/build/ckeditor" {
  const ClassicEditor: any;

  export = ClassicEditor;
}

declare module "styled-component" {
  const styledcomponent: any;
  export = styledcomponent;
}
