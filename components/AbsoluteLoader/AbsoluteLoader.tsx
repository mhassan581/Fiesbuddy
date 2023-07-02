export default function AbsoluteLoader(props: { isShowing: boolean }) {
  return (
    <>
      <div className={`feis_loader_wrapper ${props.isShowing ? "active" : ""}`}>
        <div className="spinner"></div>
      </div>
    </>
  );
}
