import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./style.css";

export const Form = props => {
    const {
      values: { username, email, password, confirmPassword },
      errors,
      touched,
      handleChange,
      isValid,
      setFieldTouched
    } = props;
   
    const change = (name, e) => {
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
    };
    return (
      <form
        onSubmit={() => {
          alert("submitted");
        }}
      >
        <TextField
          id="username"
          name="username"
          helperText={touched.username ? errors.username : ""}
          error={touched.name && Boolean(errors.username)}
          label="UserName"
          value={username}
          onChange={change.bind(null, "username")}
          fullWidth
   
        />
        <TextField
          id="email"
          name="email"
          helperText={touched.email ? errors.email : ""}
          error={touched.email && Boolean(errors.email)}
          label="Email"
          fullWidth
          value={email}
          onChange={change.bind(null, "email")}
   
        />
        <TextField
          id="password"
          name="password"
          helperText={touched.password ? errors.password : ""}
          error={touched.password && Boolean(errors.password)}
          label="Password"
          fullWidth
          type="password"
          value={password}
          onChange={change.bind(null, "password")}
   
        />
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          helperText={touched.confirmPassword ? errors.confirmPassword : ""}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          label="Confirm Password"
          fullWidth
          type="password"
          value={confirmPassword}
          onChange={change.bind(null, "confirmPassword")}
   
        />

     <Button
       type="submit"
       fullWidth
       variant="contained"
       color="primary"
       disabled={!isValid}
     >
       Submit
     </Button>
   </form>
 );
};