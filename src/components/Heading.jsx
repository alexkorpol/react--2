import Typography from '@mui/material/Typography';

export const Heading = ({ children }) => {
  return (
    <Typography
      variant="h3"
      component="h2"
      gutterBottom
      style={{
        fontWeight: 700,
        marginTop: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </Typography>
  );
};
