import TextField from "@material-ui/core/TextField";

export const CustomTextField = ({ name, label, value, errors, onChange, handleBlur, touched, type}) => ( 
    <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id={name}
        label={label}
        name={name}
        value={value}
        type={type}
		helperText={touched[name]&&errors[name]}
        error={touched[name]&&Boolean(errors[name])}
		onChange={onChange}
        onBlur={handleBlur}
    />
)