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
          <iframe src={`${props.documentURL}`} title="Document Frame"></iframe>
          <span className="close-btn" onClick={props.toggle}></span>
        </div>
      </section>
    </>
  );
}
