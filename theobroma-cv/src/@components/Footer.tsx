import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Stack, Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: 'primary.main' }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <MuiLink
          href="https://www.google.com/"
          target="_blank"
          sx={{ textDecoration: 'none', cursor: 'pointer', color: 'common.white' }}
        >
          <LinkedInIcon />
        </MuiLink>
        <MuiLink
          href="https://www.google.com/"
          target="_blank"
          sx={{ textDecoration: 'none', cursor: 'pointer', color: 'common.white' }}
        >
          <GitHubIcon />
        </MuiLink>
        <MuiLink
          href="https://www.google.com/"
          target="_blank"
          sx={{ textDecoration: 'none', cursor: 'pointer', color: 'common.white' }}
        >
          <TelegramIcon />
        </MuiLink>
        <MuiLink
          href="https://www.google.com/"
          target="_blank"
          sx={{ textDecoration: 'none', cursor: 'pointer', color: 'common.white' }}
        >
          <EmailIcon />
        </MuiLink>
      </Stack>
      <Typography align="center" color="common.white">
        © {new Date().getFullYear()}, created by Aleksandr Siryi
      </Typography>
    </Box>
  );
};

export default Footer;
