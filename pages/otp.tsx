import PreLoginLayout from "@/components/PreLoginLayout";
import NumOnlyField from "@/components/PreLoginLayout/NumOnlyField/NumOnlyField";
import style from "@/styles/prelogin/prelogin.module.scss";

export default function OneTimePass() {
  return (
    <>
      <PreLoginLayout
        title={`One Time \n Password!`}
        onBack={`./`}
        styleClass={`otp_layout`}
      >
        {
          <div className={`${style.form_wrap + " " + style.register_form}`}>
            <h1 className={style.form_title}>Enter OTP!</h1>
            <p className={style.para}>
              An 6 digit code has been sent to your number <br /> +12 123 4123
              4124
            </p>
            <form action="" className={style.form}>
              <div
                className={`${
                  style.form_group + " " + style.inline + " " + style.otp_group
                } `}
              >
                {[...Array(6)].map((item, index) => {
                  return (
                    <NumOnlyField
                      key={index}
                      setID={`opt_i_${index}`}
                      setName={`opt_i_${index}`}
                      refs={item}
                    />
                  );
                })}
              </div>
              {/* SUBMIT  */}
              <div className={`${style.form_group}`}>
                <button id="login" className={`${style.btn_submit}`}>
                  Continue
                </button>
              </div>
            </form>
          </div>
        }
      </PreLoginLayout>
    </>
  );
}
