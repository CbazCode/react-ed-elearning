import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {App} from './components/App';
import { getAllSpeacialities, startGetAllPosts, startGetAllSpeacialities } from './redux/actions/actionCreators';
import { store } from './redux/store';
import "./styles/styles.scss"



ReactDOM.render(
    <App />
  ,
  document.getElementById('root')
);


