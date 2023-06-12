import { Ref } from "react";

export default function NumOnlyField(props: {
  setID: string;
  setName: string;
  refs: any;
}) {
  return (
    <>
      <input
        ref={props.refs}
        type="text"
        // pattern="/^[0-9\b]+$/"
        name={props.setName}
        id={props.setID}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        maxLength={1}
        className={`form-control`}
        required
      />
    </>
  );
}
