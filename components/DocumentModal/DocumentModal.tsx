import useModal from "@/hooks/UseModal";

export default function DocumentModal(props: {
  documentURL: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <>
      <section className={`document-modal ${props.isOpen ? "active" : ""}`}>
        <div className="inner">
          <iframe src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${props.documentURL}`} title="Document Frame"></iframe>
          <span className="close-btn" onClick={props.toggle}></span>
        </div>
      </section>
    </>
  );
}
