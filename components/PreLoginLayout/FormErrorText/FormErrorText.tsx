import style from '@/styles/prelogin/errorText.module.scss';

export default function FormErrorText(props: { text: string; styleClass: string; }) {
    return (
        <>
            <span className={style.error_text + ' ' + props.styleClass} >
                {props.text}
            </span>
        </>
    )
}