const ViewEditHtml = ({ html }) => {
  return <div className="ck-content" dangerouslySetInnerHTML={{ __html: html }}></div>;
};
export default ViewEditHtml;
