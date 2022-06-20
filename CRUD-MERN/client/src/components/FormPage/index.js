import TextField from '@material-ui/core/TextField';

function FormPage() {
    return (
        <div className="flexRow jcCntr alignCntr fullHeight">
            <form>
                <div>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <h1>Form</h1>
            </form>
        </div>
    )
}
export default FormPage