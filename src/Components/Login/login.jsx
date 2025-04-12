
import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
  Link,
} from '@mui/material';

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login/register logic here
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#f0f2f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        pt: 15, // <--- margin from the top
        pb: 15,
      }}
    >
      <Paper elevation={6} sx={{ p: 4, width: '90%', maxWidth: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>
          {isRegistering ? 'Register' : 'Login'}
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            variant="outlined"
          />

          {isRegistering && (
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
            />
          )}

          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              isRegistering
                ? 'I agree to the terms & conditions'
                : 'Remember me'
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            {isRegistering ? 'Register' : 'Login'}
          </Button>

          <Typography align="center">
            {isRegistering ? (
              <>
                Already have an account?{' '}
                <Link href="#" onClick={handleToggle}>Login</Link>
              </>
            ) : (
              <>
                Don&apos;t have an account?{' '}
                <Link href="#" onClick={handleToggle}>Register</Link>
              </>
            )}
          </Typography>

          {!isRegistering && (
            <Typography align="center" sx={{ mt: 2 }}>
              <Link href="#">Forgot password?</Link>
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

