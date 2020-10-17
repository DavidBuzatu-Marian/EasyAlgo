import { combineReducers } from 'redux';
import animation from './animation';
import bitsAnimation from './bitsAnimation';
import navbar from './navbar';

export default combineReducers({ animation, bitsAnimation, navbar });
