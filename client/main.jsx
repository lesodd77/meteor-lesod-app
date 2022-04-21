import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { MainRoutes } from '../app/ui/common/routes/MainRoutes';

Meteor.startup(() => {
  render(<MainRoutes />, document.getElementById('react-target'));
});
