import React from 'react';
import { SvgIcon } from '@mui/material';
import { AccessAlarm } from '@mui/icons-material';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative' as 'relative',
  },
  redBox: {
    position: 'absolute' as 'absolute',
    top: '50.8px',
    left: '547px',
    width: '136.25px',
    height: '62.5px',
    backgroundColor: '#f24e1e',
    border: '4px solid #000',
  },
  cursorIcon: {
    position: 'absolute' as 'absolute',
    top: '103.3px',
    left: '515.8px',
    width: '46.5px',
    height: '54.75px',
  },
  vectorContainer: {
    position: 'absolute' as 'absolute',
    top: '60.3px',
    left: '-291.7px',
    width: '713.5px',
    height: '81.5px',
  },
  vectorCircle: {
    position: 'absolute' as 'absolute',
    width: '16px',
    height: '16px',
    backgroundColor: '#fff',
    border: '4px solid #000',
    borderRadius: '50%',
  },
  vectorCircleSmall: {
    position: 'absolute' as 'absolute',
    width: '12.75px',
    height: '12.75px',
    backgroundColor: '#fff',
    border: '3.75px solid #000',
    borderRadius: '50%',
  },
  yellowBox: {
    position: 'absolute' as 'absolute',
    top: '268px',
    left: '48px',
    width: '859px',
    height: '184px',
    backgroundColor: '#ffc700',
    border: '4px solid #000',
  },
  whiteSquare: {
    position: 'absolute' as 'absolute',
    width: '22px',
    height: '22px',
    backgroundColor: '#fff',
    border: '4px solid #000',
  },
  text: {
    position: 'absolute' as 'absolute',
    top: '312px',
    left: '80px',
    fontSize: '132px',
    fontWeight: '700',
    lineHeight: '100%',
    letterSpacing: '-0.03em',
    textAlign: 'center' as 'center',
    color: '#000',
  },
  blackBox: {
    position: 'absolute' as 'absolute',
    top: '292px',
    left: '72px',
    width: '859px',
    height: '184px',
    backgroundColor: '#000',
  },
  purpleBox: {
    position: 'absolute' as 'absolute',
    top: '373.5px',
    left: '1014.5px',
    width: '136.25px',
    height: '62.5px',
    backgroundColor: '#a259ff',
    border: '4px solid #000',
  },
  vectorContainerBottom: {
    position: 'absolute' as 'absolute',
    top: '567px',
    left: '752.5px',
    width: '718px',
    height: '180.16px',
  },
  blueBox: {
    position: 'absolute' as 'absolute',
    top: '568.3px',
    left: '265.3px',
    width: '136px',
    height: '62.5px',
    backgroundColor: '#5551ff',
    border: '4px solid #000',
  },
};

const SAMPLE = () => {
  return (
    <div style={styles.container}>
      <div style={styles.redBox}>
        <div style={styles.cursorIcon}>
          <SvgIcon component={AccessAlarm} />
        </div>
      </div>
      <div style={styles.vectorContainer}>
        <div style={{ ...styles.vectorCircle, top: '60.3px', left: '109.5px' }}></div>
        <div style={{ ...styles.vectorCircle, top: '71.3px', left: '216.8px' }}></div>
        <div style={{ ...styles.vectorCircle, top: '82px', left: '405.8px' }}></div>
        <div style={{ ...styles.vectorCircleSmall, top: '97.5px', left: '-16.5px' }}></div>
        <div style={{ ...styles.vectorCircle, top: '121.8px', left: '257.3px' }}></div>
        <div style={{ ...styles.vectorCircle, top: '125.5px', left: '115.5px' }}></div>
        <div style={{ ...styles.vectorCircleSmall, top: '129px', left: '-16.5px' }}></div>
      </div>
      <div style={styles.yellowBox}>
        <div style={{ ...styles.whiteSquare, top: '255px', left: '35px' }}></div>
        <div style={{ ...styles.whiteSquare, top: '255px', left: '898px' }}></div>
        <div style={styles.text}>Figma basics</div>
        <div style={{ ...styles.whiteSquare, top: '442px', left: '898px' }}></div>
        <div style={{ ...styles.whiteSquare, top: '443px', left: '35px' }}></div>
      </div>
      <div style={styles.blackBox}></div>
      <div style={styles.purpleBox}>
        <div style={styles.cursorIcon}>
          <SvgIcon component={AccessAlarm} />
        </div>
      </div>
      <div style={styles.vectorContainerBottom}>
        <div style={{ ...styles.vectorCircle, top: '622.8px', left: '1102.8px' }}></div>
        <div style={{ ...styles.vectorCircle, top: '631.5px', left: '863.5px' }}></div>
        <div style={{ ...styles.vectorCircle, top: '649px', left: '1003.8px' }}></div>
      </div>
      <div style={styles.blueBox}>
        <div style={styles.cursorIcon}>
          <SvgIcon component={AccessAlarm} />
        </div>
      </div>
    </div>
  );
};

export default SAMPLE;