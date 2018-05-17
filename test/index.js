import React from 'react';
import test from 'tape';
import sd from 'skin-deep';

import App from '../containers/App';
import Images from '../components/Images';

test('--Load home page--', (t) => {
    const tree = sd.shallowRender(<App />);
    const appTitle = tree.subTree(".container-fluid").subTree("h1").props.children;
    const appDesc = tree.subTree(".container-fluid").subTree("p").props.children;
    t.equal(appTitle, "Europe 2018");
    t.equal(appDesc, "This is a small informational site that shows all the UNESCO heritage sites I visited on my vacation in April 2018. This website is built with React, React Router, and react-images. To view a list of all the sites select the \"List of Sites\" dropdown and click on any link to view information on a particular site.")
    t.end();
})

test('--Load images from an example site--', (t) => {
    const tree = sd.shallowRender(<Images name="austria" picsLength={4} />);

    const images = tree.getMountedInstance();

    // Test props for the component
    t.equal(images.props.name, 'austria');
    t.equal(images.props.picsLength, 4);

    const imageList = tree.subTree(".image-list");

    // Test that 4 images from Austria render
    t.equal(imageList.props.children[0].length, 4);
    t.end();
});