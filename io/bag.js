
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoBag extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m32.5 12.5l2.5 25h-35l2.5-25h5v-0.3c0-5.3 4.4-9.7 9.7-9.7h0.6c5.3 0 9.7 4.4 9.7 9.7v0.3h5z m-22.5-0.3v0.3h15v-0.3c0-4-3.2-7.2-7.2-7.2h-0.6c-4 0-7.2 3.2-7.2 7.2z m-7.2 22.8h29.4l-2-20h-2.7v2.8c0.8 0.5 1.3 1.3 1.3 2.2 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-0.9 0.4-1.7 1.2-2.2v-2.8h-15v2.8c0.8 0.5 1.3 1.3 1.3 2.2 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-0.9 0.4-1.7 1.2-2.2v-2.8h-2.7z"/></g>
            </IconBase>
        );
    }
}