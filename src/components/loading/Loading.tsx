import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingType } from 'react-loading';

interface Props {
  type?: LoadingType;
  color?: string;
  width?: number;
  height?: number;
}
// Loading type
// blank
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes
const Loading = ({ type = 'spokes', color = '#1CC8EE', width = 25, height = 25 }: Props) => (
  <ReactLoading type={type} color={color} height={height} width={width} />
);

export default Loading;
