import React from 'react';
import { SvgIcon } from '@mui/material';
import { Create, ImportExport } from '@mui/icons-material';

const styles = {
  container: {
    width: '360px',
    height: '176px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    backgroundColor: '#0052cc',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    flexGrow: 1,
    height: '24px',
  },
  content: {
    padding: '16px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
  },
  icon: {
    height: '16px',
    marginRight: '8px',
  },
  text: {
    fontSize: '14px',
    color: '#172b4d',
  },
};

const SAMPLE = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="/images/logo.png" alt="Jira Logo" style={styles.logo} />
      </div>
      <div style={styles.content}>
        <div style={styles.item}>
          <SvgIcon component={Create} style={styles.icon} />
          <span style={styles.text}>Create issue from design</span>
        </div>
        <div style={styles.item}>
          <SvgIcon component={ImportExport} style={styles.icon} />
          <span style={styles.text}>Import an issue or project</span>
        </div>
      </div>
    </div>
  );
};

export default SAMPLE;