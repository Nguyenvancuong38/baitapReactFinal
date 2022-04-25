import Button from "./Button"

function DialogDelete({message, onDialog}) {
    return (
        <div style={{
            position: "fixed",
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0,0,0,0.5)'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '16px'
                
                }}
            >
                <h3>{message}</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: 'white'}}>
                    <Button name="Yes" type="button" functiOnClick={() => onDialog(true)}/>
                    <Button name="No" type="button" functiOnClick={() => onDialog(false)}/>
                </div>
            </div>
        </div>

    )
}

export default DialogDelete