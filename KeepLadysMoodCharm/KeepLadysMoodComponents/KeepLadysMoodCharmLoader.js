import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Image, StyleSheet } from 'react-native';
import KeepLadysMoodCharmBack from './KeepLadysMoodCharmBack';

const KeepLadysMoodCharmLoader = () => {
  const charmladysLoader = `
 <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=0.6">
      <style>
        html, body {
          height: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        
        }
        ${''}
        ${`
        .loader {
          --color-one: #ffbf48;
          --color-two: #be4a1d;
          --color-three: #ffbf4780;
          --color-four: #bf4a1d80;
          --color-five: #ffbf4740;
          --time-animation: 2s;
          --size: 1.2;
          position: relative;
          border-radius: 50%;
          transform: scale(var(--size));
          box-shadow:
            0 0 25px 0 var(--color-three),
            0 20px 50px 0 var(--color-four);
          animation: colorize calc(var(--time-animation) * 3) ease-in-out infinite;
        }
        .loader::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border-top: solid 1px var(--color-one);
          border-bottom: solid 1px var(--color-two);
          background: linear-gradient(180deg, var(--color-five), var(--color-four));
          box-shadow:
            inset 0 10px 10px 0 var(--color-three),
            inset 0 -10px 10px 0 var(--color-four);
        }
        .loader .box {
          width: 100px;
          height: 100px;
          background: linear-gradient(
            180deg,
            var(--color-one) 30%,
            var(--color-two) 70%
          );
          mask: url(#clipping);
          -webkit-mask: url(#clipping);
        }
        .loader svg {
          position: absolute;
        }
        .loader svg #clipping {
          filter: contrast(15);
          animation: roundness calc(var(--time-animation) / 2) linear infinite;
        }
        .loader svg #clipping polygon {
          filter: blur(7px);
        }
        .loader svg #clipping polygon:nth-child(1) {
          transform-origin: 75% 25%;
          transform: rotate(90deg);
        }
        .loader svg #clipping polygon:nth-child(2) {
          transform-origin: 50% 50%;
          animation: rotation var(--time-animation) linear infinite reverse;
        }
        .loader svg #clipping polygon:nth-child(3) {
          transform-origin: 50% 60%;
          animation: rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -3);
        }
        .loader svg #clipping polygon:nth-child(4),
        .loader svg #clipping polygon:nth-child(5) {
          transform-origin: 40% 40%;
          animation: rotation var(--time-animation) linear infinite reverse;
        }
        .loader svg #clipping polygon:nth-child(5) {
          animation-delay: calc(var(--time-animation) / -2);
        }
        .loader svg #clipping polygon:nth-child(6),
        .loader svg #clipping polygon:nth-child(7) {
          transform-origin: 60% 40%;
          animation: rotation var(--time-animation) linear infinite;
        }
        .loader svg #clipping polygon:nth-child(7) {
          animation-delay: calc(var(--time-animation) / -1.5);
        }
        @keyframes rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes roundness {
          0%, 60%, 100% { filter: contrast(15); }
          20%, 40% { filter: contrast(3); }
        }
        @keyframes colorize {
          0% { filter: hue-rotate(0deg); }
          20% { filter: hue-rotate(-30deg); }
          40% { filter: hue-rotate(-60deg); }
          60% { filter: hue-rotate(-90deg); }
          80% { filter: hue-rotate(-45deg); }
          100% { filter: hue-rotate(0deg); }
        }
        `}
      </style>
    </head>
    <body>
      <div class="loader">
        <svg width="0" height="0">
          <filter id="clipping">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </svg>
        <div class="box"></div>
      </div>
    </body>
  </html>
  `;

  return (
    <KeepLadysMoodCharmBack>
      <View style={styles.loadercnt}>
        <Image
          source={require('../../assets/images/ladysmoodloader.png')}
          style={{ bottom: 50 }}
        />
      </View>

      <View style={styles.loaderwrap}>
        <WebView
          originWhitelist={['*']}
          source={{ html: charmladysLoader }}
          style={{ width: 200, height: 200, backgroundColor: 'transparent' }}
          scrollEnabled={false}
        />
      </View>
    </KeepLadysMoodCharmBack>
  );
};

const styles = StyleSheet.create({
  loadercnt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 650,
  },
  loaderwrap: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default KeepLadysMoodCharmLoader;
