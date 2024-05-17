import ColorChooser from "./ColorChooser";

export default function ColorChooserPanel(props) {
    return (
        <>
            <ColorChooser
                bgcolor="#DCDCDC"
                click={props.click}
                class={props.class}
            />
            <ColorChooser
                bgcolor="#E6B0AA"
                click={props.click}
                class={props.class}
            />
            <ColorChooser
                bgcolor="#A9CCE3"
                click={props.click}
                class={props.class}
            />
            <ColorChooser
                bgcolor="#ABEBC6"
                click={props.click}
                class={props.class}
            />
            <ColorChooser
                bgcolor="#F9E79F"
                click={props.click}
                class={props.class}
            />
            <ColorChooser
                bgcolor="#D2B4DE"
                click={props.click}
                class={props.class}
            />
            <ColorChooser
                bgcolor="#EDBB99"
                click={props.click}
                class={props.class}
            />
        </>
    );
}
